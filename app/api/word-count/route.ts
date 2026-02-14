import { NextRequest, NextResponse } from 'next/server';

const WORD_COUNT_URL = process.env.NEXT_PUBLIC_COMPILE_SERVICE_URL + '/word-count';

interface FileEntry {
  path: string;
  content: string;
}

interface WordCountRequest {
  latex?: string;
  files?: FileEntry[];
}

export async function POST(request: NextRequest) {
  try {
    const body: WordCountRequest = await request.json();

    let files: FileEntry[];

    if (body.files && body.files.length > 0) {
      files = body.files;
    } else if (body.latex) {
      files = [{ path: 'main.tex', content: body.latex }];
    } else {
      return NextResponse.json(
        { success: false, error: 'No latex content or files provided' },
        { status: 400 }
      );
    }

    const response = await fetch(WORD_COUNT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ files }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Word count failed' }));
      return NextResponse.json(
        { success: false, error: errorData.message || errorData.error || 'Word count failed' },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      ...data,
    });
  } catch (error) {
    console.error('Word count error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to count words' },
      { status: 500 }
    );
  }
}

