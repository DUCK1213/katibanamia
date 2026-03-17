import { NextRequest, NextResponse } from 'next/server';

// M-Pesa API configuration
const MPESA_CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY || '';
const MPESA_CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET || '';
const MPESA_SHORTCODE = process.env.MPESA_SHORTCODE || '';
const MPESA_PASSKEY = process.env.MPESA_PASSKEY || '';
const MPESA_CALLBACK_URL = process.env.MPESA_CALLBACK_URL || '';

interface Contribution {
  id: string;
  amount: number;
  phoneNumber: string;
  transactionId?: string;
  status: 'pending' | 'completed' | 'failed';
  timestamp: string;
  donorName?: string;
}

// In-memory storage for contributions (in a real app, use a database)
let contributions: Contribution[] = [];

// Load initial data from localStorage if available (for demo purposes)
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('katiba-contributions');
  if (saved) {
    contributions = JSON.parse(saved);
  }
}

// Save contributions to localStorage (for demo purposes)
const saveContributions = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('katiba-contributions', JSON.stringify(contributions));
  }
};

// Get M-Pesa access token
async function getMpesaAccessToken(): Promise<string> {
  const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString('base64');
  
  const response = await fetch('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
  });
  
  const data = await response.json();
  return data.access_token;
}

// Register C2B URL (for receiving payments)
async function registerC2BUrl() {
  const token = await getMpesaAccessToken();
  
  const response = await fetch('https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ShortCode: MPESA_SHORTCODE,
      ResponseType: 'Completed',
      ConfirmationURL: `${MPESA_CALLBACK_URL}/confirmation`,
      ValidationURL: `${MPESA_CALLBACK_URL}/validation`,
    }),
  });
  
  return response.json();
}

// Simulate M-Pesa STK Push (for demo purposes)
async function initiateStkPush(phoneNumber: string, amount: number): Promise<any> {
  // In a real implementation, this would call the actual M-Pesa API
  // For demo, we'll simulate the response
  
  const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '');
  const password = Buffer.from(`${MPESA_SHORTCODE}${MPESA_PASSKEY}${timestamp}`).toString('base64');
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return simulated success response
  return {
    MerchantRequestID: `MG_${Date.now()}`,
    CheckoutRequestID: `CK_${Date.now()}`,
    ResponseCode: '0',
    ResponseDescription: 'Success. Request accepted for processing',
    CustomerMessage: 'Success. Request accepted for processing'
  };
}

// Handle GET request - get all contributions
export async function GET() {
  try {
    // Sort by timestamp descending (newest first)
    const sortedContributions = [...contributions].sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
    
    // Calculate totals
    const totalAmount = contributions.reduce((sum, c) => sum + (c.status === 'completed' ? c.amount : 0), 0);
    const totalContributions = contributions.filter(c => c.status === 'completed').length;
    const pendingContributions = contributions.filter(c => c.status === 'pending').length;
    
    return NextResponse.json({
      contributions: sortedContributions,
      summary: {
        totalAmount,
        totalContributions,
        pendingContributions
      }
    });
  } catch (error) {
    console.error('Error fetching contributions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contributions' },
      { status: 500 }
    );
  }
}

// Handle POST request - create a new contribution
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, phoneNumber, donorName } = body;
    
    // Validate input
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Valid amount is required' },
        { status: 400 }
      );
    }
    
    if (!phoneNumber || !/^\+?[0-9]{10,15}$/.test(phoneNumber)) {
      return NextResponse.json(
        { error: 'Valid phone number is required' },
        { status: 400 }
      );
    }
    
    // Format phone number (ensure it starts with +254 for Kenya)
    let formattedPhone = phoneNumber.replace(/\s+/g, '');
    if (!formattedPhone.startsWith('+')) {
      if (formattedPhone.startsWith('0')) {
        formattedPhone = '+254' + formattedPhone.substring(1);
      } else if (formattedPhone.startsWith('254')) {
        formattedPhone = '+' + formattedPhone;
      } else {
        formattedPhone = '+254' + formattedPhone;
      }
    }
    
    // Create new contribution
    const newContribution: Contribution = {
      id: `contrib_${Date.now()}`,
      amount,
      phoneNumber: formattedPhone,
      status: 'pending',
      timestamp: new Date().toISOString(),
      donorName: donorName || undefined
    };
    
    // In a real app, we would initiate M-Pesa STK push here
    // For demo, we'll simulate immediate completion
    try {
      // Uncomment the following lines to use actual M-Pesa integration
      // const stkResult = await initiateStkPush(formattedPhone, amount);
      // if (stkResult.ResponseCode === '0') {
      //   newContribution.transactionId = stkResult.CheckoutRequestID;
      // }
      
      // For demo, auto-complete after a short delay
      setTimeout(() => {
        const index = contributions.findIndex(c => c.id === newContribution.id);
        if (index !== -1) {
          contributions[index].status = 'completed';
          saveContributions();
        }
      }, 2000);
    } catch (error) {
      newContribution.status = 'failed';
    }
    
    // Add to contributions list
    contributions.push(newContribution);
    saveContributions();
    
    return NextResponse.json(
      { 
        message: 'Contribution initiated successfully',
        contribution: newContribution
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing contribution:', error);
    return NextResponse.json(
      { error: 'Failed to process contribution' },
      { status: 500 }
    );
  }
}

// Handle PUT request - update contribution status (for M-Pesa callbacks)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { transactionId, status } = body;
    
    if (!transactionId || !status) {
      return NextResponse.json(
        { error: 'Transaction ID and status are required' },
        { status: 400 }
      );
    }
    
    const index = contributions.findIndex(c => c.transactionId === transactionId);
    if (index === -1) {
      return NextResponse.json(
        { error: 'Contribution not found' },
        { status: 404 }
      );
    }
    
    contributions[index].status = status as 'completed' | 'failed';
    contributions[index].timestamp = new Date().toISOString();
    saveContributions();
    
    return NextResponse.json({
      message: 'Contribution status updated successfully',
      contribution: contributions[index]
    });
  } catch (error) {
    console.error('Error updating contribution status:', error);
    return NextResponse.json(
      { error: 'Failed to update contribution status' },
      { status: 500 }
    );
  }
}