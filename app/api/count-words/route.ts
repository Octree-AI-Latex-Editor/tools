import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { pdfData } = await request.json();

    if (!pdfData) {
      return NextResponse.json(
        { error: 'No PDF data provided' },
        { status: 400 }
      );
    }

    // Remove data URL prefix if present
    const base64Data = pdfData.includes(',') ? pdfData.split(',')[1] : pdfData;
    
    // Convert base64 to Buffer
    const pdfBuffer = Buffer.from(base64Data, 'base64');

    // Use pdf-parse v2 for server-side PDF parsing (Node.js compatible)
    // pdf-parse v2 uses PDFParse class instead of direct function
    // Use dynamic import to avoid ESLint no-require-imports error
    const pdfParseModule = await import('pdf-parse');
    const PDFParse = pdfParseModule.PDFParse;
    const parser = new PDFParse({ data: pdfBuffer });
    const result = await parser.getText();
    
    // Extract text and page count
    const fullText = result.text || '';
    const numPages = result.total || 1;

    // Clean up text and count words
    const cleanedText = fullText.trim();
    
    // Count words (split by whitespace and filter out empty strings)
    const words = cleanedText.split(/\s+/).filter((word: string) => word.length > 0);
    const wordCount = words.length;
    
    // Count characters (including spaces)
    const charCountWithSpaces = cleanedText.length;
    
    // Count characters (excluding spaces)
    const charCountWithoutSpaces = cleanedText.replace(/\s/g, '').length;
    
    // Count paragraphs (split by double newlines or significant spacing)
    const paragraphs = cleanedText.split(/\n\s*\n/).filter((p: string) => p.trim().length > 0);
    const paragraphCount = paragraphs.length || 1;

    // Format extracted text as LaTeX document
    const latexCode = `\\documentclass{article}
\\begin{document}

${cleanedText.split('\n').map(line => line.trim() ? line : '').join('\n')}

\\end{document}`;

    return NextResponse.json({
      success: true,
      wordCount,
      charCountWithSpaces,
      charCountWithoutSpaces,
      pageCount: numPages,
      paragraphCount,
      fullText: cleanedText,
      latexCode,
      pdfData: pdfData, // Return original PDF data for preview (from request)
    });
  } catch (error) {
    console.error('Word counting error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to count words in PDF' 
      },
      { status: 500 }
    );
  }
}
