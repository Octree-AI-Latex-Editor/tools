import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { instructions } = await request.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY || ''}`,
      },
      body: JSON.stringify({
        model: 'gpt-5',
        messages: [
          {
            role: 'user',
            content: `Generate TikZ code based on these instructions: "${instructions}". 

Create a complete LaTeX document with:
- \\documentclass{standalone} or \\documentclass{article}
- \\usepackage{tikz} and any other necessary TikZ libraries
- Complete \\begin{document}...\\end{document} structure
- Well-commented TikZ code inside a tikzpicture environment

Return ONLY the complete LaTeX code, no explanations or markdown formatting.`,
          },
        ],
        max_completion_tokens: 10000,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);

      // Return fallback as stream
      const encoder = new TextEncoder();
      const fallbackLatex = `\\documentclass{standalone}
\\usepackage{tikz}
\\begin{document}
\\begin{tikzpicture}
  % Simple example diagram
  \\node[draw, circle] (A) at (0,0) {A};
  \\node[draw, circle] (B) at (3,0) {B};
  \\draw[->] (A) -- (B);
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
    console.error('TikZ generation error:', error);

    // Return fallback as stream
    const encoder = new TextEncoder();
    const fallbackLatex = `\\documentclass{standalone}
\\usepackage{tikz}
\\begin{document}
\\begin{tikzpicture}
  % Simple example diagram
  \\node[draw, circle] (A) at (0,0) {A};
  \\node[draw, circle] (B) at (3,0) {B};
  \\draw[->] (A) -- (B);
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