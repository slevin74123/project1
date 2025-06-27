import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  if (!process.env.EDENAI_API_KEY) {
    console.error('EDENAI_API_KEY environment variable is not set');
    return NextResponse.json(
      { error: 'Server configuration error: Missing API Key.' },
      { status: 500 }
    );
  }

  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/text/ai_detection",
      headers: {
        authorization: `Bearer ${process.env.EDENAI_API_KEY}`,
      },
      data: {
        providers: "winstonai",
        text: text,
      },
    };

    try {
      const response = await axios.request(options);
      return NextResponse.json(response.data);
    } catch (error: any) {
      // Handle specific error cases
      if (error.response) {
        switch (error.response.status) {
          case 402:
            return NextResponse.json(
              { 
                error: 'API quota exceeded or billing issue. Please try again later or contact support.',
                details: error.response.data
              },
              { status: 402 }
            );
          case 401:
            return NextResponse.json(
              { 
                error: 'Authentication failed. Please contact support.',
                details: error.response.data
              },
              { status: 401 }
            );
          case 429:
            return NextResponse.json(
              { 
                error: 'Too many requests. Please try again later.',
                details: error.response.data
              },
              { status: 429 }
            );
          default:
            return NextResponse.json(
              { 
                error: 'An error occurred while processing your request.',
                details: error.response.data
              },
              { status: error.response.status }
            );
        }
      }
      throw error; // Re-throw if it's not a response error
    }
  } catch (error: any) {
    console.error('AI Detection Error:', error);
    return NextResponse.json(
      { 
        error: 'An unexpected error occurred. Please try again later.',
        details: error.message
      },
      { status: 500 }
    );
  }
} 