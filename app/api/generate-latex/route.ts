import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

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
            content: `You are a LaTeX expert. Generate a complete, well-formatted LaTeX document based on this description:

"${prompt}"

Requirements:
- Include \\documentclass with appropriate class (article, report, beamer, etc.)
- Add all necessary packages (amsmath, amssymb, graphicx, etc.)
- Create a complete document structure with \\begin{document}...\\end{document}
- Include proper sections, formatting, and LaTeX best practices
- Add placeholder content where appropriate
- Make it ready to compile

Return ONLY the complete LaTeX code, no explanations or markdown formatting.`,
          },
        ],
        max_tokens: 2500,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      
      // Return fallback as stream
      const encoder = new TextEncoder();
      const fallbackLatex = `\\documentclass{article}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\begin{document}

\\title{Sample Document}
\\author{Author Name}
\\date{\\today}
\\maketitle

\\section{Introduction}
This is a sample LaTeX document.

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
    console.error('LaTeX generation error:', error);
    
    // Return fallback as stream
    const encoder = new TextEncoder();
    const fallbackLatex = `\\documentclass{article}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\begin{document}

\\title{Sample Document}
\\author{Author Name}
\\date{\\today}
\\maketitle

\\section{Introduction}
This is a sample LaTeX document.

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