import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { image, type } = await request.json();
    const fileData = image;

    // For now, use GPT-4o-mini to convert table data to LaTeX
    // In production, you might want to parse the files directly
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
            content: `Convert this table data to a complete LaTeX document with a properly formatted table. The file type is ${type}. Include \\documentclass{article}, necessary packages (booktabs, array, etc.), and wrap the table in \\begin{document}...\\end{document}. Return ONLY the complete LaTeX code, no explanations or markdown formatting.\n\nTable data:\n${fileData}`,
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
        latex: `\\documentclass{article}
\\usepackage{booktabs}
\\usepackage{array}
\\begin{document}
\\begin{table}[h]
\\centering
\\begin{tabular}{lcc}
\\toprule
Column 1 & Column 2 & Column 3 \\\\
\\midrule
Data 1 & Data 2 & Data 3 \\\\
Data 4 & Data 5 & Data 6 \\\\
\\bottomrule
\\end{tabular}
\\caption{Sample Table}
\\end{table}
\\end{document}`,
      });
    }

    const data = await response.json();
    const latex = data.choices[0]?.message?.content || '';

    return NextResponse.json({ latex: latex.trim() });
  } catch (error) {
    console.error('Conversion error:', error);

    // Return demo data on error
    return NextResponse.json({
      latex: `\\documentclass{article}
\\usepackage{booktabs}
\\usepackage{array}
\\begin{document}
\\begin{table}[h]
\\centering
\\begin{tabular}{lcc}
\\toprule
Column 1 & Column 2 & Column 3 \\\\
\\midrule
Data 1 & Data 2 & Data 3 \\\\
Data 4 & Data 5 & Data 6 \\\\
\\bottomrule
\\end{tabular}
\\caption{Sample Table}
\\end{table}
\\end{document}`,
    });
  }
} 