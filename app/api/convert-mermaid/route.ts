import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { mermaid } = await request.json();

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
            content: `Convert this Mermaid diagram syntax to a complete LaTeX document using TikZ. Include:
- \\documentclass{standalone} or \\documentclass{article}
- \\usepackage{tikz} and necessary TikZ libraries
- Complete \\begin{document}...\\end{document} structure
- Properly formatted TikZ code that recreates the Mermaid diagram

Return ONLY the complete LaTeX code, no explanations or markdown formatting.

Mermaid input:
${mermaid}`,
          },
        ],
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      return NextResponse.json({
        latex: `\\documentclass{standalone}
\\usepackage{tikz}
\\usetikzlibrary{shapes.geometric, arrows}
\\begin{document}
\\begin{tikzpicture}[node distance=2cm]
  \\node (start) [rectangle, draw] {Start};
  \\node (end) [rectangle, draw, below of=start] {End};
  \\draw [->] (start) -- (end);
\\end{tikzpicture}
\\end{document}`,
      });
    }

    const data = await response.json();
    const latex = data.choices[0]?.message?.content || '';

    return NextResponse.json({ latex: latex.trim() });
  } catch (error) {
    console.error('Mermaid conversion error:', error);
    return NextResponse.json({
      latex: `\\documentclass{standalone}
\\usepackage{tikz}
\\usetikzlibrary{shapes.geometric, arrows}
\\begin{document}
\\begin{tikzpicture}[node distance=2cm]
  \\node (start) [rectangle, draw] {Start};
  \\node (end) [rectangle, draw, below of=start] {End};
  \\draw [->] (start) -- (end);
\\end{tikzpicture}
\\end{document}`,
    });
  }
} 