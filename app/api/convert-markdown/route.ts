import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { markdown } = await request.json();

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
            content: `Convert this Markdown document to a complete LaTeX document. Include:
- \\documentclass{article}
- Necessary packages (amsmath, amssymb, hyperref, graphicx, booktabs for tables, listings for code blocks, etc.)
- Proper LaTeX formatting for all Markdown elements (headers, bold, italic, lists, tables, code blocks, math equations)
- Complete \\begin{document}...\\end{document} structure
- Preserve all math equations (both inline $ and block $$)

Return ONLY the complete LaTeX code, no explanations or markdown formatting.

Markdown content:
${markdown}`,
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
This is a fallback LaTeX document.
\\end{document}`,
      });
    }

    const data = await response.json();
    const latex = data.choices[0]?.message?.content || '';

    return NextResponse.json({ latex: latex.trim() });
  } catch (error) {
    console.error('Markdown conversion error:', error);
    return NextResponse.json({
      latex: `\\documentclass{article}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{hyperref}
\\begin{document}
\\section{Sample Document}
This is a fallback LaTeX document.
\\end{document}`,
    });
  }
} 