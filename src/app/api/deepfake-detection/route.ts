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
    const { file_url } = await request.json();

    if (!file_url) {
      return NextResponse.json(
        { error: 'Image URL is required' },
        { status: 400 }
      );
    }

    const options = {
      method: 'POST',
      url: 'https://api.edenai.run/v2/image/deepfake_detection',
      headers: {
        authorization: `Bearer ${process.env.EDENAI_API_KEY}`,
      },
      data: {
        providers: 'sightengine',
        file_url: file_url,
        fallback_providers: '',
      },
    };

    try {
      const response = await axios.request(options);
      return NextResponse.json(response.data);
    } catch (error: any) {
      if (error.response) {
        console.error('Eden AI Error:', error.response.data);
        return NextResponse.json(
          {
            error:
              'An error occurred while processing the image with the external API.',
            details: error.response.data,
          },
          { status: error.response.status }
        );
      }
      throw error;
    }
  } catch (error: any) {
    console.error('Deepfake Detection Error:', error);
    return NextResponse.json(
      {
        error: 'An unexpected error occurred. Please try again later.',
        details: error.message,
      },
      { status: 500 }
    );
  }
} 