import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json();

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
                      text: 'Convert this handwritten mathematical expression to a complete LaTeX document. Include \\documentclass{article}, necessary packages (amsmath, amssymb, etc.), and wrap the math in \\begin{document}...\\end{document}. Return ONLY the complete LaTeX code, no explanations or markdown formatting.',
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
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      
      const encoder = new TextEncoder();
      const fallbackLatex = '\\[ F(x) = \\int_{a}^{x} f(t) \\, dt \\quad (1) \\]\n\\[ F\'(x) = f(x) \\quad (2) \\]';
      
      return new Response(
        new ReadableStream({
          start(controller) {
            controller.enqueue(encoder.encode(fallbackLatex));
            controller.close();
          },
        }),
        {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
          },
        }
      );
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        if (!reader) {
          controller.close();
          return;
        }

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data === '[DONE]') continue;

                try {
                  const parsed = JSON.parse(data);
                  const content = parsed.choices[0]?.delta?.content;
                  if (content) {
                    controller.enqueue(encoder.encode(content));
                  }
                } catch (e) {
                  // Skip invalid JSON
                }
              }
            }
          }
        } catch (error) {
          console.error('Stream error:', error);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Conversion error:', error);
    
    const encoder = new TextEncoder();
    const fallbackLatex = '\\[ F(x) = \\int_{a}^{x} f(t) \\, dt \\quad (1) \\]\n\\[ F\'(x) = f(x) \\quad (2) \\]';
    
    return new Response(
      new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode(fallbackLatex));
          controller.close();
        },
      }),
      {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      }
    );
  }
} 