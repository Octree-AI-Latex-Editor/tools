import { NextRequest } from 'next/server';

const SYSTEM_PROMPT = `You are an expert LaTeX and TikZ engineer. Your task is to convert images of diagrams, flowcharts, shapes, and visual elements into clean, compilable TikZ code.

IMPORTANT RULES:
1. Output ONLY the TikZ code - no explanations, no markdown code blocks, no commentary.
2. The code must be a complete, compilable LaTeX document with all necessary packages.
3. Use clean, structured \\begin{tikzpicture} conventions with accurate geometry.
4. Create editable nodes and paths - NOT rasterized content.
5. Preserve the visual layout, colors, shapes, and text from the original image as accurately as possible.
6. Use appropriate TikZ libraries (arrows, shapes, positioning, calc, etc.) as needed.
7. Include meaningful comments in the code to explain different sections.
8. Use relative positioning and coordinates for maintainability.
9. For colors, use standard LaTeX color names or define custom colors with \\definecolor.
10. Ensure all text labels are preserved and positioned correctly.

OUTPUT FORMAT:
- Start with \\documentclass{standalone}
- Include all necessary packages (tikz, and any required tikz libraries)
- Use \\begin{document} and \\end{document}
- The TikZ picture should be self-contained and compilable

SHAPE RECOGNITION:
- Rectangles: Use \\node[draw, rectangle] or \\draw commands
- Circles/Ellipses: Use \\node[draw, circle] or \\node[draw, ellipse]
- Arrows: Use appropriate arrow tips with ->>, ->, -stealth, etc.
- Lines: Use \\draw with appropriate line styles (dashed, dotted, thick, etc.)
- Text: Use \\node for labels and text elements
- Flowchart shapes: Use shapes.geometric library for diamonds, parallelograms, etc.

Remember: Output ONLY valid LaTeX/TikZ code, nothing else.`;

const FALLBACK_TIKZ = `\\documentclass{standalone}
\\usepackage{tikz}

\\begin{document}
\\begin{tikzpicture}
  % Fallback diagram - conversion failed
  \\node[draw, rounded corners, fill=yellow!20] at (0,0) {Conversion failed. Please try again.};
\\end{tikzpicture}
\\end{document}`;

export async function POST(request: NextRequest) {
  try {
    const { image, mimeType } = await request.json();

    if (!image) {
      const encoder = new TextEncoder();
      return new Response(
        new ReadableStream({
          start(controller) {
            controller.enqueue(encoder.encode(FALLBACK_TIKZ));
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

    const validMimeTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];
    const finalMimeType = validMimeTypes.includes(mimeType) ? mimeType : 'image/png';

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
            role: 'system',
            content: SYSTEM_PROMPT,
          },
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: {
                  url: `data:${finalMimeType};base64,${image}`,
                  detail: 'high',
                },
              },
              {
                type: 'text',
                text: 'Convert this image into TikZ code. Analyze all shapes, text, colors, arrows, and layout. Generate clean, compilable LaTeX/TikZ code that accurately reproduces this diagram.',
              },
            ],
          },
        ],
        max_tokens: 8192,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);

      const encoder = new TextEncoder();
      return new Response(
        new ReadableStream({
          start(controller) {
            controller.enqueue(encoder.encode(FALLBACK_TIKZ));
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
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Image to TikZ conversion error:', error);

    const encoder = new TextEncoder();
    return new Response(
      new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode(FALLBACK_TIKZ));
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