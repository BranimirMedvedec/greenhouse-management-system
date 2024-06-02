import { NextResponse } from "next/server";

export async function GET (req) {
  try {
    // Log the incoming request data
    console.log('GET Request:', req);

    // Example of logging specific parts of the request
    const url = req.url;
    const headers = req.headers;

    console.log('URL:', url);
    console.log('Headers:', headers);

    // Return a response
    return NextResponse.json({ success: 'GET request received' }, { status: 200 });
  } catch (error) {
    console.error('Error handling GET request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST (req) {
  try {
    // Log the incoming request data
    console.log('POST Request:', req);

    // Read the request body
    const body = await req.json();
    console.log('Body:', body);

    // Example of logging specific parts of the request
    const url = req.url;
    const headers = req.headers;

    console.log('URL:', url);
    console.log('Headers:', headers);

    // Return a response
    return NextResponse.json({ success: 'POST request received' }, { status: 200 });
  } catch (error) {
    console.error('Error handling POST request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
