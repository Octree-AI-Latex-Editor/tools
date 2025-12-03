import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { equation, image } = await request.json();

    // Validate input
    if (!equation && !image) {
      return NextResponse.json(
        { error: 'Either equation text or image is required' },
        { status: 400 }
      );
    }

    if (equation && equation.length > 2000) {
      return NextResponse.json(
        { error: 'Equation text must be 2000 characters or less' },
        { status: 400 }
      );
    }

    // Build messages based on input type
    const messages: Array<{
      role: 'system' | 'user';
      content: string | Array<{ type: string; text?: string; image_url?: { url: string } }>;
    }> = [
      {
        role: 'system',
        content: `You are a LaTeX equation generator. Your task is to convert mathematical descriptions or images into valid LaTeX code.

Rules:
- Output ONLY valid LaTeX equations
- Use display math mode with \\[ \\] for main equations
- Use inline math mode with $ $ only when appropriate for inline expressions
- NO markdown formatting (no \`\`\` code blocks)
- NO explanations or additional text
- NO document boilerplate (no \\documentclass, \\begin{document}, etc.)
- Include only the mathematical expression itself
- Use appropriate LaTeX packages features (amsmath, amssymb) but don't include package imports
- For complex equations, use align or equation environments inside the display math delimiters`,
      },
    ];

    // Add user message based on input type
    if (image && equation) {
      // Both image and text provided
      messages.push({
        role: 'user',
        content: [
          {
            type: 'text',
            text: `Convert this mathematical expression to LaTeX. The description is: "${equation}". Also refer to the attached image for visual context. Output ONLY the LaTeX equation code.`,
          },
          {
            type: 'image_url',
            image_url: {
              url: image,
            },
          },
        ],
      });
    } else if (image) {
      // Only image provided
      messages.push({
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'Convert this mathematical expression from the image to LaTeX. Output ONLY the LaTeX equation code.',
          },
          {
            type: 'image_url',
            image_url: {
              url: image,
            },
          },
        ],
      });
    } else {
      // Only text provided
      messages.push({
        role: 'user',
        content: `Convert this mathematical description to LaTeX: "${equation}". Output ONLY the LaTeX equation code.`,
      });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY || ''}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        max_tokens: 1000,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);

      // Return fallback as stream
      const encoder = new TextEncoder();
      const fallbackLatex = '\\[ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\]';

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
            Connection: 'keep-alive',
          },
        }
      );
    }

    // Create a transform stream to parse SSE and extract content
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
                } catch {
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
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Equation to LaTeX error:', error);

    // Return fallback as stream
    const encoder = new TextEncoder();
    const fallbackLatex = '\\[ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\]';

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
          Connection: 'keep-alive',
        },
      }
    );
  }
}
