import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

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
            content: `You are a LaTeX expert. Generate a complete, well-formatted LaTeX document based on this description:

"${prompt}"

Requirements:
- Include \\documentclass with appropriate class (article, report, beamer, etc.)
- Add all necessary packages (amsmath, amssymb, graphicx, etc.)
- Create a complete document structure with \\begin{document}...\\end{document}
- Include proper sections, formatting, and LaTeX best practices
- Add placeholder content where appropriate
- Make it ready to compile

Return ONLY the complete LaTeX code, no explanations or markdown formatting.`,
          },
        ],
        max_tokens: 2500,
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

\\title{Sample Document}
\\author{Author Name}
\\date{\\today}
\\maketitle

\\section{Introduction}
This is a sample LaTeX document.

\\end{document}`,
      });
    }

    const data = await response.json();
    const latex = data.choices[0]?.message?.content || '';

    return NextResponse.json({ latex: latex.trim() });
  } catch (error) {
    console.error('LaTeX generation error:', error);
    return NextResponse.json({
      latex: `\\documentclass{article}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\begin{document}

\\title{Sample Document}
\\author{Author Name}
\\date{\\today}
\\maketitle

\\section{Introduction}
This is a sample LaTeX document.

\\end{document}`,
    });
  }
} 