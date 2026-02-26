import { NextResponse } from 'next/server';

const API_URL = 'https://api.escuelajs.co/api/v1/products';

// Handler DELETE
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await fetch(`${API_URL}/${params.id}`, { method: 'DELETE' });
  return NextResponse.json({ message: 'Deleted' });
}

// Handler PUT (BARU: Untuk fitur Edit)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const res = await fetch(`${API_URL}/${params.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data);
}