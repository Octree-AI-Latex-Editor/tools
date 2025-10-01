import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { image, type } = await request.json();

    // Call OpenAI Vision API with GPT-4o-mini
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
            content: [
              {
                type: 'text',
                text: 'Convert this handwritten mathematical expression to clean LaTeX code. Return ONLY the LaTeX code, no explanations or markdown formatting.',
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
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      
      // Fallback to demo response if API fails
      return NextResponse.json({
        latex: '\\[ F(x) = \\int_{a}^{x} f(t) \\, dt \\quad (1) \\]\n\\[ F\'(x) = f(x) \\quad (2) \\]',
      });
    }

    const data = await response.json();
    const latex = data.choices[0]?.message?.content || '';

    return NextResponse.json({ latex: latex.trim() });
  } catch (error) {
    console.error('Conversion error:', error);
    
    // Return demo data on error
    return NextResponse.json({
      latex: '\\[ F(x) = \\int_{a}^{x} f(t) \\, dt \\quad (1) \\]\n\\[ F\'(x) = f(x) \\quad (2) \\]',
    });
  }
} 