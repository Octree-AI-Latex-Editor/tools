import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { latex } = await request.json();

    const COMPILE_SERVICE_URL = process.env.COMPILE_SERVICE_URL || 'http://142.93.195.236:3001';
    
    const authToken = request.headers.get('x-supabase-token') || process.env.TOOLS_SERVICE_TOKEN;
    const authHeader: Record<string, string> = {};
    if (authToken) {
      authHeader['Authorization'] = `Bearer ${authToken}`;
    }

    // Call Octree's compile server
    const response = await fetch(`${COMPILE_SERVICE_URL}/compile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        ...authHeader,
      },
      body: latex,
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