import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';

const COMPILE_PROD_URL = `${process.env.COMPILE_SERVER}/compile`;
const JWT_SECRET = process.env.SUPABASE_JWT_SECRET;

async function getServiceToken(): Promise<string> {
  const secret = new TextEncoder().encode(JWT_SECRET);
  return new SignJWT({ role: 'service_role', iss: 'tools' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(secret);
}

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
    const token = await getServiceToken();

    let response: Response;

    const authHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    // If files array is provided, use multi-file JSON format
    if (body.files && body.files.length > 0) {
      response = await fetch(COMPILE_PROD_URL, {
        method: 'POST',
        headers: authHeaders,
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
        headers: authHeaders,
        body: JSON.stringify({
          files: [{ path: 'main.tex', content: body.latex }],
        }),
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

