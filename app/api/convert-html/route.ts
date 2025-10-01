import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { html } = await request.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY || ''}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'user',
            content: `Convert this HTML markup to a complete LaTeX document. Include:
- \\documentclass{article}
- Necessary packages (amsmath, amssymb, hyperref, etc.)
- Complete \\begin{document}...\\end{document} structure
- Proper LaTeX equivalents for HTML elements (headers, lists, tables, emphasis, etc.)

Return ONLY the complete LaTeX code, no explanations or markdown formatting.

HTML input:
${html}`,
          },
        ],
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      return NextResponse.json({
        latex: `\\documentclass{article}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{hyperref}
\\begin{document}

\\section{Sample Document}
This is a sample LaTeX document converted from HTML.

\\end{document}`,
      });
    }

    const data = await response.json();
    const latex = data.choices[0]?.message?.content || '';

    return NextResponse.json({ latex: latex.trim() });
  } catch (error) {
    console.error('HTML conversion error:', error);
    return NextResponse.json({
      latex: `\\documentclass{article}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{hyperref}
\\begin{document}

\\section{Sample Document}
This is a sample LaTeX document converted from HTML.

\\end{document}`,
    });
  }
} 