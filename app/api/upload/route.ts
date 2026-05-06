import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');
  const category = searchParams.get('category') || 'general';
  const password = searchParams.get('password');

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: '비밀번호가 틀렸습니다.' }, { status: 401 });
  }

  if (!filename || !request.body) {
    return NextResponse.json({ error: '파일이 없습니다.' }, { status: 400 });
  }

  const blob = await put(`photos/${category}/${Date.now()}-${filename}`, request.body, {
    access: 'public',
  });

  return NextResponse.json({ url: blob.url });
}
