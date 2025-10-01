import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { latex } = await request.json();

    // Call Octree's compile endpoint
    const response = await fetch('https://app.useoctree.com/api/compile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latex,
      }),
    });

    if (!response.ok) {
      throw new Error('Compilation failed');
    }

    const data = await response.json();
    
    return NextResponse.json({
      success: true,
      pdfUrl: data.pdfUrl || data.url,
      previewUrl: data.previewUrl || data.url,
    });
  } catch (error) {
    console.error('Compilation error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to compile LaTeX' },
      { status: 500 }
    );
  }
} 