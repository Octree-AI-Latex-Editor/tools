'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Loader2, FileText, Heading, MessageSquare } from 'lucide-react';
import { DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { loader } from '@monaco-editor/react';
import {
  latexLanguageConfiguration,
  latexTokenProvider,
  registerLatexCompletions,
} from '@/lib/editor-config';
import { OctreeCTA } from '@/components/OctreeCTA';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const DEFAULT_LATEX = `\\documentclass{article}
\\usepackage{amsmath}
\\usepackage{amssymb}

\\begin{document}

\\section{Introduction}

This is a sample LaTeX document to demonstrate the word counter. The tool accurately counts words in your document while ignoring LaTeX commands and markup.

\\subsection{How It Works}

The word counter uses texcount to analyze your LaTeX source and provides detailed statistics:

\\begin{itemize}
  \\item Words in main text body
  \\item Words in section headers
  \\item Words in captions and other elements
\\end{itemize}

\\section{Mathematical Content}

Mathematical formulas like $E = mc^2$ and displayed equations are counted separately:
\\[
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
\\]

\\section{Conclusion}

Use this tool to check word counts for academic papers, theses, and other LaTeX documents.

\\end{document}`;

interface WordCountResult {
  success: boolean;
  words?: number;
  textWords?: number;
  headersWords?: number;
  captionWords?: number;
  durationMs?: number;
  error?: string;
}

export default function LatexWordCounter() {
  const [latexCode, setLatexCode] = useState<string>(DEFAULT_LATEX);
  const [result, setResult] = useState<WordCountResult | null>(null);
  const [isCounting, setIsCounting] = useState(false);
  const [lastCountedLatex, setLastCountedLatex] = useState<string>('');

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.languages.register({ id: 'latex' });
      monaco.languages.setLanguageConfiguration('latex', latexLanguageConfiguration);
      monaco.languages.setMonarchTokensProvider('latex', latexTokenProvider);
      registerLatexCompletions(monaco);
    });
  }, []);

  const countWords = async (latex: string) => {
    if (lastCountedLatex === latex && result?.success) return;
    if (!latex.trim()) return;

    setIsCounting(true);
    try {
      const response = await fetch('/api/word-count', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latex }),
      });

      const data: WordCountResult = await response.json();
      setResult(data);
      setLastCountedLatex(latex);
    } catch (err) {
      console.error('Word count error:', err);
      setResult({ success: false, error: 'Failed to count words' });
    } finally {
      setIsCounting(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      countWords(latexCode);
    }, 800);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latexCode]);

  useEffect(() => {
    countWords(DEFAULT_LATEX);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn("min-h-screen bg-gray-50", dmSans.className)}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12">
          <div className="relative flex items-start justify-center mb-3">
            <Link href="/" className="absolute left-0 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Tools</span>
            </Link>
            <h1 className="text-4xl font-light text-gray-900">LaTeX Word Counter</h1>
          </div>
          <p className="text-lg text-gray-600 text-center">Count words in your LaTeX documents accurately</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Code Editor Section */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-900 border border-blue-200">
                  INPUT
                </span>
                <h2 className="text-xl font-medium text-gray-900">LaTeX Document</h2>
              </div>
              <p className="text-sm text-gray-600">
                Paste or type your LaTeX code
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl h-[600px] w-full flex flex-col overflow-hidden">
              <div className="flex-1 overflow-hidden">
                <Editor
                  height="100%"
                  language="latex"
                  value={latexCode}
                  onChange={(value) => setLatexCode(value || '')}
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
          </div>

          {/* Results Section */}
          <div className="flex flex-col">
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-green-50 px-3 py-1.5 text-sm font-medium text-green-900 border border-green-200">
                  RESULTS
                </span>
                <h2 className="text-xl font-medium text-gray-900">Word Count</h2>
              </div>
              <p className="text-sm text-gray-600">
                {isCounting ? 'Counting...' : 'Live word statistics'}
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-6">
              {isCounting && !result ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <Loader2 className="mx-auto h-10 w-10 text-blue-500 animate-spin mb-4" />
                    <p className="text-gray-600">Counting words...</p>
                  </div>
                </div>
              ) : result?.success ? (
                <>
                  {/* Total Words - Large Display */}
                  <div className="text-center py-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <div className="text-6xl font-bold text-blue-600 mb-2">
                      {result.words?.toLocaleString()}
                    </div>
                    <div className="text-sm font-medium text-blue-800 uppercase tracking-wide">
                      Total Words
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Breakdown</h3>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg border border-gray-200">
                          <FileText className="h-5 w-5 text-gray-600" />
                        </div>
                        <span className="font-medium text-gray-700">Text Body</span>
                      </div>
                      <span className="text-2xl font-semibold text-gray-900">
                        {result.textWords?.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg border border-gray-200">
                          <Heading className="h-5 w-5 text-gray-600" />
                        </div>
                        <span className="font-medium text-gray-700">Headers</span>
                      </div>
                      <span className="text-2xl font-semibold text-gray-900">
                        {result.headersWords?.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg border border-gray-200">
                          <MessageSquare className="h-5 w-5 text-gray-600" />
                        </div>
                        <span className="font-medium text-gray-700">Captions</span>
                      </div>
                      <span className="text-2xl font-semibold text-gray-900">
                        {result.captionWords?.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Processing Time */}
                  {result.durationMs !== undefined && (
                    <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                      Processed in {result.durationMs}ms
                    </div>
                  )}
                </>
              ) : result?.error ? (
                <div className="text-center py-12">
                  <div className="text-red-500 mb-2">⚠️</div>
                  <p className="text-gray-600">{result.error}</p>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400">Enter LaTeX to count words</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <OctreeCTA source="tools:latex-word-counter" />
        </div>
      </div>
    </div>
  );
}

