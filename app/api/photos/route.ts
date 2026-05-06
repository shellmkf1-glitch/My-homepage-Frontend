import { list } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || '';

  const { blobs } = await list({ prefix: `photos/${category}` });

  return NextResponse.json(blobs.map((b) => b.url));
}
