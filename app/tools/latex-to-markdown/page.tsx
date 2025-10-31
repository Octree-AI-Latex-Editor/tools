'use client';

import { useState, useEffect } from 'react';
import { Code2, Loader2, ArrowLeft, Download, ChevronDown } from 'lucide-react';
import { DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const DEFAULT_LATEX = `\\documentclass{article}
\\usepackage{amsmath, amssymb}
\\usepackage{booktabs}
\\begin{document}

\\section{Introduction}
This is some \\textbf{bold} and \\textit{italic} text with inline math $E=mc^2$.

\\subsection{Block Math}
\\[
\\int_a^b f(x)\\,dx
\\]

\\subsection{Table}
\\begin{tabular}{lcc}
\\toprule
Item & A & B \\\\
\\midrule
Row 1 & 10 & 20 \\\\
Row 2 & 30 & 40 \\\\
\\bottomrule
\\end{tabular}

\\end{document}`;

export default function LatexToMarkdown() {
  const [latexText, setLatexText] = useState<string>(DEFAULT_LATEX);
  const [markdownText, setMarkdownText] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');
  const [showExportMenu, setShowExportMenu] = useState(false);

  useEffect(() => {
    // no special editor config needed for LaTeX here
  }, []);

  const convertLatex = async () => {
    if (!latexText.trim()) return;
    setIsProcessing(true);
    setError('');
    setMarkdownText('');

    try {
      const response = await fetch('/api/convert-latex-to-markdown', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latex: latexText }),
      });

      if (!response.ok) throw new Error('Conversion failed');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) throw new Error('No response body');

      let accumulatedText = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        accumulatedText += chunk;
        setMarkdownText(accumulatedText);
      }
    } catch (err) {
      setError('Failed to convert LaTeX. Please try again.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const exportAsMarkdown = () => {
    const blob = new Blob([markdownText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    a.click();
    URL.revokeObjectURL(url);
    setShowExportMenu(false);
  };

  return (
    <div className={cn('min-h-screen bg-gray-50', dmSans.className)}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Tools</span>
          </Link>
        </div>

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-3">LaTeX to Markdown Converter</h1>
          <p className="text-lg text-gray-600">Convert LaTeX documents or snippets to clean Markdown</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-900 border border-orange-200">
                  INPUT
                </span>
                <h2 className="text-xl font-medium text-gray-900">LaTeX Content</h2>
              </div>
              <p className="text-sm text-gray-600">Paste your LaTeX code here</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl h-[520px] w-full flex flex-col overflow-hidden">
              <div className="flex-1 overflow-hidden">
                <Editor
                  height="100%"
                  language="latex"
                  value={latexText}
                  onChange={(value) => setLatexText(value || '')}
                  theme="vs-light"
                  options={{
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    fontSize: 14,
                    lineNumbers: 'on',
                    wordWrap: 'on',
                    padding: { top: 16, bottom: 16 },
                  }}
                />
              </div>
            </div>

            <button
              onClick={convertLatex}
              disabled={isProcessing || !latexText.trim()}
              className="mt-6 w-full px-6 py-3 bg-blue-600 text-white text-base font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Converting...' : 'Convert to Markdown'}
            </button>

            {error && (
              <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-4">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-green-50 px-3 py-1.5 text-sm font-medium text-green-900 border border-green-200">
                  OUTPUT
                </span>
                <h2 className="text-xl font-medium text-gray-900">Markdown</h2>
              </div>
              <p className="text-sm text-gray-600">Ready to use in your Markdown files</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl h-[520px] w-full flex flex-col overflow-hidden">
              <div className="border-b border-gray-200 flex-shrink-0">
                <div className="flex gap-1 px-6 pt-4">
                  <button
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors border-gray-900 text-gray-900`}
                  >
                    <Code2 className="h-4 w-4" />
                    Code
                  </button>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col overflow-hidden">
                {!markdownText && isProcessing ? (
                  <div className="flex items-center justify-center flex-1">
                    <div className="text-center">
                      <Loader2 className="mx-auto h-12 w-12 text-blue-500 animate-spin mb-4" />
                      <p className="text-gray-600">Converting to Markdown...</p>
                    </div>
                  </div>
                ) : markdownText ? (
                  <div className="flex-1 overflow-hidden rounded-lg relative">
                    <Editor
                      height="100%"
                      language="markdown"
                      value={markdownText}
                      theme="vs-light"
                      options={{
                        readOnly: true,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        fontSize: 14,
                        lineNumbers: 'on',
                        wordWrap: 'on',
                        padding: { top: 8, bottom: 8 },
                      }}
                    />
                    {isProcessing && (
                      <div className="absolute top-2 right-2 flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-md text-sm shadow-sm">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Converting...
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center flex-1">
                    <p className="text-gray-400">Converted Markdown will appear here...</p>
                  </div>
                )}
              </div>
            </div>

            {markdownText && !isProcessing && (
              <div className="mt-6 flex gap-3">
                <div className="relative">
                  <button
                    onClick={() => setShowExportMenu(!showExportMenu)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-base font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <Download className="h-5 w-5" />
                    Export
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {showExportMenu && (
                    <div className="absolute bottom-full mb-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[160px] z-10">
                      <button
                        onClick={exportAsMarkdown}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Export as Markdown
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


