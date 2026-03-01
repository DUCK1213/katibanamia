import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, model = 'openai/gpt-4o' } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Check if AI Gateway URL is configured
    const gatewayUrl = process.env.VERCEL_AI_GATEWAY_URL;
    const gatewayKey = process.env.VERCEL_AI_GATEWAY_KEY;

    if (!gatewayUrl) {
      // Fallback: Return a mock response if no gateway configured
      return NextResponse.json({
        response: `AI Gateway not configured. Prompt received: ${prompt.substring(0, 100)}...`,
        model: 'fallback',
      });
    }

    // Call Vercel AI Gateway
    const response = await fetch(gatewayUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(gatewayKey && { 'Authorization': `Bearer ${gatewayKey}` }),
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant for Katiba Na Mia, a Kenyan constitutional education movement.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('AI Gateway Error:', error);
    return NextResponse.json(
      { error: 'Failed to process AI request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'AI Gateway API is running',
    endpoints: {
      POST: '/api/ai - Send prompts to AI models',
    },
    models: [
      'openai/gpt-4o',
      'openai/gpt-3.5-turbo',
      'anthropic/claude-3-sonnet',
      'google/gemini-pro',
    ],
  });
}
