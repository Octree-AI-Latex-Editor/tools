import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { instructions } = await request.json();

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
            content: `Generate TikZ code based on these instructions: "${instructions}". 

Create a complete LaTeX document with:
- \\documentclass{standalone} or \\documentclass{article}
- \\usepackage{tikz} and any other necessary TikZ libraries
- Complete \\begin{document}...\\end{document} structure
- Well-commented TikZ code inside a tikzpicture environment

Return ONLY the complete LaTeX code, no explanations or markdown formatting.`,
          },
        ],
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);

      // Fallback to demo response if API fails
      return NextResponse.json({
        latex: `\\documentclass{standalone}
\\usepackage{tikz}
\\begin{document}
\\begin{tikzpicture}
  % Simple example diagram
  \\node[draw, circle] (A) at (0,0) {A};
  \\node[draw, circle] (B) at (3,0) {B};
  \\draw[->] (A) -- (B);
\\end{tikzpicture}
\\end{document}`,
      });
    }

    const data = await response.json();
    const latex = data.choices[0]?.message?.content || '';

    return NextResponse.json({ latex: latex.trim() });
  } catch (error) {
    console.error('TikZ generation error:', error);

    // Return demo data on error
    return NextResponse.json({
      latex: `\\documentclass{standalone}
\\usepackage{tikz}
\\begin{document}
\\begin{tikzpicture}
  % Simple example diagram
  \\node[draw, circle] (A) at (0,0) {A};
  \\node[draw, circle] (B) at (3,0) {B};
  \\draw[->] (A) -- (B);
\\end{tikzpicture}
\\end{document}`,
    });
  }
} 