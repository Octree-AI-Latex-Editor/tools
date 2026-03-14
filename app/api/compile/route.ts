import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';

const COMPILE_URL = process.env.COMPILE_SERVER;
const JWT_SECRET = process.env.SUPABASE_JWT_SECRET;

async function getServiceToken(): Promise<string> {
  const secret = new TextEncoder().encode(JWT_SECRET);
  return new SignJWT({ role: 'service_role', iss: 'tools' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(secret);
}

export async function POST(request: NextRequest) {
  try {
    const { latex } = await request.json();
    const token = await getServiceToken();

    // Call Octree's compile server
    const response = await fetch(`${COMPILE_URL}/compile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        files: [{ path: 'main.tex', content: latex }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Compilation failed:', errorText);
      throw new Error('Compilation failed');
    }

    const pdfArrayBuffer = await response.arrayBuffer();
    const pdfBuffer = Buffer.from(pdfArrayBuffer);
    const base64PDF = pdfBuffer.toString('base64');
    
    return NextResponse.json({
      success: true,
      pdf: base64PDF,
      previewUrl: `data:application/pdf;base64,${base64PDF}`,
    });
  } catch (error) {
    console.error('Compilation error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to compile LaTeX' },
      { status: 500 }
    );
  }
} 