import { NextRequest, NextResponse } from 'next/server';
import { query, testConnection } from '@/lib/db';

export async function GET() {
  try {
    // Test connection
    const connectionTest = await testConnection();
    
    if (!connectionTest.success) {
      return NextResponse.json(
        { error: 'Database connection failed', details: connectionTest.error },
        { status: 500 }
      );
    }

    // Get database info
    const versionResult = await query('SELECT version()');
    const tablesResult = await query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);

    return NextResponse.json({
      status: 'connected',
      timestamp: connectionTest.timestamp,
      version: versionResult.rows[0].version,
      tables: tablesResult.rows.map((r: { table_name: string }) => r.table_name),
    });
  } catch (error) {
    console.error('Database API Error:', error);
    return NextResponse.json(
      { error: 'Database error', details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { action } = await request.json();

    if (action === 'init') {
      // Create tables for the application
      await query(`
        CREATE TABLE IF NOT EXISTS contacts (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          subject VARCHAR(255),
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await query(`
        CREATE TABLE IF NOT EXISTS newsletter_subscribers (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await query(`
        CREATE TABLE IF NOT EXISTS orders (
          id SERIAL PRIMARY KEY,
          customer_name VARCHAR(255) NOT NULL,
          customer_email VARCHAR(255) NOT NULL,
          customer_phone VARCHAR(50),
          items JSONB NOT NULL,
          total_amount DECIMAL(10, 2) NOT NULL,
          status VARCHAR(50) DEFAULT 'pending',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await query(`
        CREATE TABLE IF NOT EXISTS contributions (
          id VARCHAR(255) PRIMARY KEY,
          amount DECIMAL(10, 2) NOT NULL,
          phone_number VARCHAR(50) NOT NULL,
          donor_name VARCHAR(255),
          status VARCHAR(20) DEFAULT 'pending',
          transaction_id VARCHAR(255),
          timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      return NextResponse.json({
        message: 'Database initialized successfully',
        tables: ['contacts', 'newsletter_subscribers', 'orders', 'contributions'],
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Database Init Error:', error);
    return NextResponse.json(
      { error: 'Failed to initialize database', details: (error as Error).message },
      { status: 500 }
    );
  }
}
