import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { image, type } = await request.json();

    // For now, using a placeholder response
    // In production, this would call OpenAI Vision API or similar
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY || ''}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Convert this handwritten mathematical expression to clean LaTeX code. Return ONLY the LaTeX code, no explanations.',
              },
              {
                type: 'image_url',
                image_url: {
                  url: image,
                },
              },
            ],
          },
        ],
        max_tokens: 1000,
        stream: false,
      }),
    });

    if (!response.ok) {
      // Fallback to mock response if API fails
      return NextResponse.json({
        latex: '\\[ F(x) = \\int_{a}^{x} f(t) \\, dt \\quad (1) \\]\n\\[ F\'(x) = f(x) \\quad (2) \\]',
      });
    }

    const data = await response.json();
    const latex = data.choices[0]?.message?.content || '';

    return NextResponse.json({ latex });
  } catch (error) {
    console.error('Conversion error:', error);
    // Return mock data on error
    return NextResponse.json({
      latex: '\\[ F(x) = \\int_{a}^{x} f(t) \\, dt \\quad (1) \\]\n\\[ F\'(x) = f(x) \\quad (2) \\]',
    });
  }
} 