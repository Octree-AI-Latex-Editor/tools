import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { latex } = await request.json();

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
            content: `Convert the following LaTeX document or snippet to clean, standard Markdown. Requirements:
- Preserve inline math as $...$ and display math as $$...$$
- Convert sections/headers to #, ##, ###, etc.
- Convert itemize/enumerate to Markdown lists
- Convert tables (tabular, booktabs) to Markdown tables
- Convert figures/images to Markdown image links if possible
- Convert \textbf, \textit, \emph to **bold** and *italic*
- Preserve code listings/environments as fenced code blocks
- Keep hyperlinks as [text](url)
- Output ONLY Markdown, no explanations or backticks around the whole document

LaTeX input:
${latex}`,
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
      const fallbackMarkdown = `# Sample Document\n\nThis is a fallback Markdown document. Inline math: $E=mc^2$.\n\n$$\\int_a^b f(x)\\,dx$$`;

      return new Response(
        new ReadableStream({
          start(controller) {
            controller.enqueue(encoder.encode(fallbackMarkdown));
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
    console.error('LaTeX to Markdown conversion error:', error);

    const encoder = new TextEncoder();
    const fallbackMarkdown = `# Sample Document\n\nThis is a fallback Markdown document. Inline math: $E=mc^2$.\n\n$$\\int_a^b f(x)\\,dx$$`;

    return new Response(
      new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode(fallbackMarkdown));
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


