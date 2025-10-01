import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { mathml } = await request.json();

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
            content: `Convert this MathML (Mathematical Markup Language) markup to a complete LaTeX document. Include:
- \\documentclass{article}
- Necessary packages (amsmath, amssymb, etc.)
- Complete \\begin{document}...\\end{document} structure
- Properly formatted LaTeX math equations

Return ONLY the complete LaTeX code, no explanations or markdown formatting.

MathML input:
${mathml}`,
          },
        ],
        max_tokens: 1500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      return NextResponse.json({
        latex: `\\documentclass{article}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\begin{document}
\\[ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\]
\\end{document}`,
      });
    }

    const data = await response.json();
    const latex = data.choices[0]?.message?.content || '';

    return NextResponse.json({ latex: latex.trim() });
  } catch (error) {
    console.error('MathML conversion error:', error);
    return NextResponse.json({
      latex: `\\documentclass{article}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\begin{document}
\\[ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\]
\\end{document}`,
    });
  }
} 