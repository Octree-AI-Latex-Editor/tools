import { NextRequest, NextResponse } from 'next/server';

const COMPILE_SERVICE_URL = process.env.COMPILE_SERVICE_URL || 'http://138.197.13.3:3001';
const COMPILE_PROD_URL = `${COMPILE_SERVICE_URL}/compile`;

interface FileEntry {
  path: string;
  content: string;
}

interface CompileRequest {
  latex?: string;
  files?: FileEntry[];
  projectId?: string;
  lastModifiedFile?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: CompileRequest = await request.json();

    let response: Response;

    const authHeader: Record<string, string> = {};
    if (process.env.COMPILE_SERVICE_AUTH_TOKEN) {
      authHeader['Authorization'] = `Bearer ${process.env.COMPILE_SERVICE_AUTH_TOKEN}`;
    }

    // If files array is provided, use multi-file JSON format
    if (body.files && body.files.length > 0) {
      response = await fetch(COMPILE_PROD_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...authHeader,
        },
        body: JSON.stringify({
          files: body.files,
          projectId: body.projectId || `tools-${Date.now()}`,
          lastModifiedFile: body.lastModifiedFile || 'main.tex',
        }),
      });
    } else if (body.latex) {
      // Simple single-file compilation
      response = await fetch(COMPILE_PROD_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
          ...authHeader,
        },
        body: body.latex,
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'No latex content or files provided' },
        { status: 400 }
      );
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Compilation failed:', errorText);
      return NextResponse.json(
        { success: false, error: errorText || 'Compilation failed' },
        { status: response.status }
      );
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

