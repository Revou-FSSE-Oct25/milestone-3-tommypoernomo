import { NextResponse } from 'next/server';

const EXTERNAL_API = 'https://api.escuelajs.co/api/v1/products';

// Handler untuk mengambil produk (Read)
export async function GET() {
  try {
    const res = await fetch(EXTERNAL_API, {
      cache: 'no-store', // Memastikan data selalu segar di level API route
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

// Handler untuk menambah produk (Create)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const res = await fetch(EXTERNAL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}