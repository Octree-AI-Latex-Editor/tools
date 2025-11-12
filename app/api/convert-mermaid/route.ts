import { NextRequest } from 'next/server';

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
- IMPORTANT: Position all nodes properly using positioning syntax like "below of=", "right of=", coordinates, or positioning library
- Ensure nodes don't overlap by specifying explicit positions
- Use proper node distance and spacing

Return ONLY the complete LaTeX code, no explanations or markdown formatting.

Mermaid input:
${mermaid}`,
          },
        ],
        max_tokens: 2000,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      
      const encoder = new TextEncoder();
      const fallbackLatex = `\\documentclass{standalone}
\\usepackage{tikz}
\\usetikzlibrary{shapes.geometric, arrows, positioning}
\\begin{document}
\\begin{tikzpicture}[node distance=2cm, every node/.style={align=center}]
  \\node (start) [rectangle, draw] {Start};
  \\node (end) [rectangle, draw, below=of start] {End};
  \\draw [->] (start) -- (end);
\\end{tikzpicture}
\\end{document}`;
      
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
    console.error('Mermaid conversion error:', error);
    
    const encoder = new TextEncoder();
    const fallbackLatex = `\\documentclass{standalone}
\\usepackage{tikz}
\\usetikzlibrary{shapes.geometric, arrows, positioning}
\\begin{document}
\\begin{tikzpicture}[node distance=2cm, every node/.style={align=center}]
  \\node (start) [rectangle, draw] {Start};
  \\node (end) [rectangle, draw, below=of start] {End};
  \\draw [->] (start) -- (end);
\\end{tikzpicture}
\\end{document}`;
    
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