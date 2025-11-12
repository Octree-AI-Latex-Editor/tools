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
            content: `Generate pgfplots code based on these instructions: "${instructions}". 

Create a complete LaTeX document with:
- \\documentclass{standalone} or \\documentclass{article}
- \\usepackage{pgfplots} with \\pgfplotsset{compat=1.18}
- Any necessary TikZ or pgfplots libraries
- Complete \\begin{document}...\\end{document} structure
- Well-commented pgfplots code inside tikzpicture and axis environments
- Use proper plot types (2D plots, 3D plots, bar graphs, scatter plots, etc.)

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

      // return fallback as stream
      const encoder = new TextEncoder();
      const fallbackLatex = `\\documentclass{standalone}
\\usepackage{pgfplots}
\\pgfplotsset{compat=1.18}
\\begin{document}
\\begin{tikzpicture}
\\begin{axis}[
    xlabel={x},
    ylabel={f(x)},
]
\\addplot[color=blue,mark=*] coordinates {
    (0,0) (1,1) (2,4) (3,9) (4,16)
};
\\end{axis}
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

    // create a transform stream to parse sse and extract content
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
                  // skip invalid json
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
    console.error('pgfplots generation error:', error);

    // return fallback as stream
    const encoder = new TextEncoder();
    const fallbackLatex = `\\documentclass{standalone}
\\usepackage{pgfplots}
\\pgfplotsset{compat=1.18}
\\begin{document}
\\begin{tikzpicture}
\\begin{axis}[
    xlabel={x},
    ylabel={f(x)},
]
\\addplot[color=blue,mark=*] coordinates {
    (0,0) (1,1) (2,4) (3,9) (4,16)
};
\\end{axis}
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

