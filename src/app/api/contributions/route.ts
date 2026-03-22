import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { triggerContributionUpdate } from '@/lib/socket-trigger';
import { appendToGoogleSheet, initializeShopOrdersSheet, updateShopOrderStatus } from '@/lib/google-sheets';

// M-Pesa API configuration (kept for logic, though still using simulation for now)
const MPESA_SHORTCODE = process.env.MPESA_SHORTCODE || '';
const MPESA_PASSKEY = process.env.MPESA_PASSKEY || '';

interface Contribution {
  id: string;
  amount: number;
  phone_number: string;
  transaction_id?: string;
  status: 'pending' | 'completed' | 'failed';
  timestamp: string;
  donor_name?: string;
}


/**
 * Helper: Obtain an M-Pesa OAuth Access Token
 */
async function getOAuthToken(): Promise<string> {
  const consumerKey = process.env.MPESA_CONSUMER_KEY || '';
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET || '';
  
  if (!consumerKey || !consumerSecret) {
    throw new Error('M-Pesa Consumer Key/Secret are not configured');
  }

  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
  
  const response = await fetch('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
    headers: {
      Authorization: `Basic ${auth}`,
    },
    cache: 'no-store'
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error('OAuth fail:', errText);
    throw new Error('Failed to generate M-Pesa access token');
  }

  const data = await response.json();
  return data.access_token;
}

/**
 * Initiates an M-Pesa STK push request (Safaricom Daraja API)
 */
async function initiateStkPush(phoneNumber: string, amount: number): Promise<any> {
  const shortCode = process.env.MPESA_SHORTCODE || '174379';
  const passkey = process.env.MPESA_PASSKEY || 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
  const callbackUrl = process.env.MPESA_CALLBACK_URL || 'https://sandbox.safaricom.co.ke/mpesa/';

  const date = new Date();
  const timestamp = date.getFullYear() +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    ('0' + date.getDate()).slice(-2) +
    ('0' + date.getHours()).slice(-2) +
    ('0' + date.getMinutes()).slice(-2) +
    ('0' + date.getSeconds()).slice(-2);

  const password = Buffer.from(`${shortCode}${passkey}${timestamp}`).toString('base64');
  
  // Format phone number to 2547XXXXXXXX
  const formattedPhone = phoneNumber.replace('+', '');
  
  const token = await getOAuthToken();

  const response = await fetch('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      BusinessShortCode: shortCode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: Math.floor(amount),
      PartyA: formattedPhone,
      PartyB: shortCode,
      PhoneNumber: formattedPhone,
      CallBackURL: callbackUrl,
      AccountReference: 'Katiba Na Mia',
      TransactionDesc: 'Contribution to Katiba Na Mia',
    }),
  });

  const data = await response.json();
  
  if (data.errorMessage || data.errorCode) {
     console.error('Daraja error:', data);
     throw new Error(data.errorMessage || 'M-Pesa STK push failed');
  }

  return data;
}

async function handleMpesaCallback(body: any) {
  const callbackData = body.Body.stkCallback;
  const transactionId = callbackData.CheckoutRequestID;
  const resultCode = callbackData.ResultCode;
  const status = resultCode === 0 ? 'completed' : 'failed';

  try {
    const result = await query(
      'UPDATE contributions SET status = $1, timestamp = NOW() WHERE transaction_id = $2 RETURNING *',
      [status, transactionId]
    );

    if (result.rowCount && result.rowCount > 0) {
      const updatedContribution = result.rows[0];
      triggerContributionUpdate({ type: 'STATUS_UPDATE', contribution: updatedContribution });
      
      // Update Google Sheet for Shop Orders if applicable
      const ordersSheetId = process.env.GOOGLE_SHEETS_ORDERS_ID;
      if (ordersSheetId && updatedContribution.donor_name?.includes('Shop Order')) {
        await updateShopOrderStatus(ordersSheetId, transactionId, status);
      }
    }
  } catch (error) {
    console.error('Error in M-Pesa Callback:', error);
  }

  return NextResponse.json({ message: 'Callback received' });
}

/**
 * GET Handler: Retrieves all contributions and summary statistics
 */
export async function GET() {
  try {
    const result = await query(
      'SELECT * FROM contributions ORDER BY timestamp DESC'
    );
    
    const contributions = result.rows;

    // Calculate totals
    const summaryResult = await query(`
      SELECT 
        SUM(CASE WHEN status = 'completed' THEN amount ELSE 0 END) as total_amount,
        COUNT(CASE WHEN status = 'completed' THEN 1 END) as total_contributions,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_contributions
      FROM contributions
    `);
    
    const summary = {
      totalAmount: parseFloat(summaryResult.rows?.[0]?.total_amount || '0'),
      totalContributions: parseInt(summaryResult.rows?.[0]?.total_contributions || '0'),
      pendingContributions: parseInt(summaryResult.rows?.[0]?.pending_contributions || '0')
    };

    return NextResponse.json({
      contributions,
      summary
    });
  } catch (error) {
    console.error('Error fetching contributions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contributions' },
      { status: 500 }
    );
  }
}

/**
 * POST Handler: Initiates a new contribution
 * 1. Validates the request
 * 2. Formats the phone number for M-Pesa
 * 3. Triggers the (simulated) payment request
 * 4. Stores the pending transaction in the database
 * 5. Notifies connected clients via WebSocket
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check if this is an M-Pesa STK Callback
    if (body.Body && body.Body.stkCallback) {
      return handleMpesaCallback(body);
    }

    const { amount, phoneNumber, donorName, isShopOrder, shopItems, customerName, deliveryAddress } = body;

    // Basic Validation
    if (!amount || amount < 10) {
      return NextResponse.json({ error: 'Minimum amount is KES 10' }, { status: 400 });
    }

    // Format phone number
    let formattedPhone = phoneNumber.replace(/\s+/g, '');
    if (!formattedPhone.startsWith('+')) {
      formattedPhone = formattedPhone.startsWith('0') ? '+254' + formattedPhone.substring(1) : '+254' + formattedPhone;
    }

    const id = `contrib_${Date.now()}`;
    const timestamp = new Date().toISOString();

    // If it's a manual order (like WhatsApp or manual checkout), skip STK push
    let transactionId = `manual_${Date.now()}`;
    let status = 'pending';

    if (body.isManual) {
      status = 'manual_order'; // Mark as manual
    } else {
      // Initiate M-Pesa simulation
      const stkResult = await initiateStkPush(formattedPhone, amount);
      transactionId = stkResult.CheckoutRequestID;
    }

    // Insert into database (using Neon PostgreSQL)
    await query(
      'INSERT INTO contributions (id, amount, phone_number, donor_name, status, transaction_id, timestamp) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [id, amount, formattedPhone, donorName || null, status, transactionId, timestamp]
    );

    // If it's a Shop Order, also append to the dedicated Shop Orders Google Sheet
    const ordersSheetId = process.env.GOOGLE_SHEETS_ORDERS_ID;
    if (isShopOrder && ordersSheetId) {
      try {
        await initializeShopOrdersSheet(ordersSheetId);
        const row = [
          id,                           // Order ID
          timestamp,                    // Date
          formattedPhone,               // Customer Phone
          shopItems || donorName,       // Items
          amount,                       // Total Amount
          status,                       // Status
          transactionId,                // M-Pesa Transaction ID
          customerName || '',           // Customer Name (private)
          deliveryAddress || '',        // Delivery Address (private)
        ];
        await appendToGoogleSheet(ordersSheetId, 'ShopOrders!A:I', [row]);
        console.log('[Sheets] Shop order logged successfully:', id);
      } catch (err: any) {
        console.error('[Sheets] Failed to log shop order to Google Sheets:', err?.message || err);
      }
    } else if (isShopOrder && !ordersSheetId) {
      console.warn('[Sheets] GOOGLE_SHEETS_ORDERS_ID not set — skipping sheet log');
    }

    const newContribution = {
      id,
      amount,
      phone_number: formattedPhone,
      donor_name: donorName,
      status: status,
      transaction_id: transactionId,
      timestamp
    };

    // Trigger WebSocket update
    triggerContributionUpdate({ type: 'NEW_CONTRIBUTION', contribution: newContribution });

    return NextResponse.json({
      message: 'Contribution initiated successfully',
      contribution: newContribution
    }, { status: 201 });

  } catch (error: any) {
    console.error('Error processing contribution:', error);
    return NextResponse.json({ error: error.message || 'Failed to process contribution' }, { status: 500 });
  }
}

/**
 * PUT Handler: Updates an existing contribution status
 * Typically called by an M-Pesa Callback URL in production.
 * Notifies UI of the status change (e.g., from 'pending' to 'completed') via WebSockets.
 */
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { transactionId, status } = body;

    const result = await query(
      'UPDATE contributions SET status = $1, timestamp = NOW() WHERE transaction_id = $2 RETURNING *',
      [status, transactionId]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Contribution not found' }, { status: 404 });
    }

    const updatedContribution = result.rows[0];

    // Trigger WebSocket update
    triggerContributionUpdate({ type: 'STATUS_UPDATE', contribution: updatedContribution });

    // Update Google Sheet for Shop Orders if applicable
    const ordersSheetId = process.env.GOOGLE_SHEETS_ORDERS_ID;
    if (ordersSheetId && updatedContribution.donor_name?.includes('Shop Order')) {
      await updateShopOrderStatus(ordersSheetId, updatedContribution.transaction_id, status);
    }

    return NextResponse.json({
      message: 'Status updated',
      contribution: updatedContribution
    });
  } catch (error) {
    console.error('Error updating status:', error);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}