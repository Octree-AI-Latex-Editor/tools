import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { latex } = await request.json();

    // Call Octree's compile server
    const response = await fetch('http://142.93.195.236:3001/compile', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
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