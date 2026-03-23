import fs from 'fs';
import path from 'path';
import { createSign } from 'crypto';

// ─── JWT / Auth helpers ──────────────────────────────────────────────────────

function getCredentials() {
  const credPath = path.join(process.cwd(), 'google-credentials.json');
  if (fs.existsSync(credPath)) {
    const raw = fs.readFileSync(credPath, 'utf8');
    return JSON.parse(raw) as { client_email: string; private_key: string };
  }
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY || '')
    .replace(/\\n/g, '\n')
    .replace(/^"|"$/g, '');
  return {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '',
    private_key: privateKey,
  };
}

function base64url(str: string | Buffer): string {
  const b = Buffer.isBuffer(str) ? str : Buffer.from(str, 'utf8');
  return b.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

async function getAccessToken(): Promise<string> {
  const { client_email, private_key } = getCredentials();

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payload = base64url(
    JSON.stringify({
      iss: client_email,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    })
  );

  const sigInput = `${header}.${payload}`;
  const sign = createSign('RSA-SHA256');
  sign.update(sigInput);
  const signature = base64url(sign.sign(private_key));

  const jwt = `${sigInput}.${signature}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!tokenRes.ok) {
    const err = await tokenRes.text();
    throw new Error(`Failed to get Google access token: ${err}`);
  }

  const data = await tokenRes.json();
  return data.access_token as string;
}

// ─── Sheets REST helpers ──────────────────────────────────────────────────────

async function sheetsRequest(
  method: 'GET' | 'POST' | 'PUT',
  url: string,
  body?: object
) {
  const token = await getAccessToken();
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Sheets API error (${res.status}): ${err}`);
  }

  return res.json();
}

const BASE = 'https://sheets.googleapis.com/v4/spreadsheets';

// ─── Public API ───────────────────────────────────────────────────────────────

export async function getGoogleSheetData(spreadsheetId: string, range: string) {
  try {
    const data = await sheetsRequest(
      'GET',
      `${BASE}/${spreadsheetId}/values/${encodeURIComponent(range)}`
    );
    return data.values as string[][] | undefined;
  } catch (error) {
    console.error('Error fetching Google Sheet data:', error);
    throw error;
  }
}

export async function appendToGoogleSheet(spreadsheetId: string, range: string, values: any[][]) {
  try {
    await sheetsRequest(
      'POST',
      `${BASE}/${spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED`,
      { values }
    );
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    throw error;
  }
}

export async function updateSheetRange(spreadsheetId: string, range: string, values: any[][]) {
  try {
    await sheetsRequest(
      'PUT',
      `${BASE}/${spreadsheetId}/values/${encodeURIComponent(range)}?valueInputOption=USER_ENTERED`,
      { values }
    );
  } catch (error) {
    console.error('Error updating Google Sheet range:', error);
    throw error;
  }
}

export async function getSpreadsheetMeta(spreadsheetId: string) {
  return sheetsRequest('GET', `${BASE}/${spreadsheetId}`);
}

export async function batchUpdate(spreadsheetId: string, requests: object[]) {
  return sheetsRequest(
    'POST',
    `${BASE}/${spreadsheetId}:batchUpdate`,
    { requests }
  );
}

// ─── Domain helpers ──────────────────────────────────────────────────────────

export async function initializeSheetHeaders(spreadsheetId: string) {
  try {
    const data = await getGoogleSheetData(spreadsheetId, 'Sheet1!A1:E1');
    if (!data || data.length === 0) {
      await updateSheetRange(spreadsheetId, 'Sheet1!A1:E1', [
        ['Date', 'Description', 'Income', 'Expense', 'Category'],
      ]);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error initializing headers:', error);
    throw error;
  }
}

export async function initializeShopOrdersSheet(spreadsheetId: string) {
  try {
    const meta: any = await getSpreadsheetMeta(spreadsheetId);
    const exists = (meta.sheets || []).some(
      (s: any) => s.properties?.title === 'ShopOrders'
    );

    if (!exists) {
      await batchUpdate(spreadsheetId, [
        { addSheet: { properties: { title: 'ShopOrders' } } },
      ]);
      await updateSheetRange(spreadsheetId, 'ShopOrders!A1:I1', [
        ['Order ID', 'Date', 'Customer Phone', 'Items', 'Total Amount', 'Status', 'M-Pesa Transaction ID', 'Customer Name', 'Delivery Address'],
      ]);
      console.log('[Sheets] ShopOrders tab created and initialized');
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error initializing ShopOrders sheet:', error);
    throw error;
  }
}

export async function updateShopOrderStatus(spreadsheetId: string, transactionId: string, status: string) {
  try {
    const rows = await getGoogleSheetData(spreadsheetId, 'ShopOrders!A:G');
    if (!rows || rows.length === 0) return false;

    // Transaction ID is in column G (index 6)
    const rowIndex = rows.findIndex((row) => row[6] === transactionId);
    if (rowIndex === -1) {
      console.log(`[Sheets] Order with transaction ID ${transactionId} not found`);
      return false;
    }

    // Update Status column F (rowIndex is 0-based; Sheets rows are 1-based)
    await updateSheetRange(spreadsheetId, `ShopOrders!F${rowIndex + 1}`, [[status]]);
    console.log(`[Sheets] Order ${transactionId} status updated to ${status}`);
    return true;
  } catch (error) {
    console.error('Error updating status in Google Sheet:', error);
    throw error;
  }
}

/**
 * Parses the raw values from Google Sheets into a structured cashflow format
 */
export function parseCashflowData(values: any[][]) {
  if (!values || values.length <= 1) return [];

  const headers = values[0];
  const data = values.slice(1);

  return data.map((row) => {
    const entry: any = {};
    headers.forEach((header: string, i: number) => {
      let val = row[i];
      if (
        header.toLowerCase().includes('income') ||
        header.toLowerCase().includes('expense') ||
        header.toLowerCase().includes('amount')
      ) {
        val = parseFloat(val?.toString().replace(/[^0-9.-]/g, '') || '0') || 0;
      }
      entry[header.toLowerCase()] = val;
    });
    return entry;
  });
}
