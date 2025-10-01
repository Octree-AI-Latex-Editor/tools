import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { input } = await request.json();

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
            content: `Generate a proper BibTeX citation entry from this input. The input might be:
- Structured details (title, author, year, etc.)
- A DOI (try to extract metadata if possible)
- Article details in natural language
- A URL or reference

Create a well-formatted BibTeX entry with:
- Appropriate entry type (@article, @book, @inproceedings, etc.)
- A meaningful citation key (e.g., author2023title)
- All relevant fields (author, title, year, journal/booktitle, volume, pages, etc.)
- Proper formatting and escaping

Return ONLY the BibTeX code, no explanations or markdown.

Input:
${input}`,
          },
        ],
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      return NextResponse.json({
        bibtex: `@article{example2023,
  author = {Example Author},
  title = {Example Title},
  journal = {Example Journal},
  year = {2023}
}`,
      });
    }

    const data = await response.json();
    const bibtex = data.choices[0]?.message?.content || '';

    return NextResponse.json({ bibtex: bibtex.trim() });
  } catch (error) {
    console.error('Citation generation error:', error);
    return NextResponse.json({
      bibtex: `@article{example2023,
  author = {Example Author},
  title = {Example Title},
  journal = {Example Journal},
  year = {2023}
}`,
    });
  }
} 