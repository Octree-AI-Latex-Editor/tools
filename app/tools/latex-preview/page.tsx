'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
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

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });
const PDFPreview = dynamic(() => import('@/components/PDFPreview'), { ssr: false });

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const DEFAULT_LATEX = `\\documentclass{article}
\\usepackage{amsmath}
\\usepackage{amssymb}

\\begin{document}

\\section{Sample Document}

This is a sample LaTeX document. You can edit the code on the left to see the preview update.

\\subsection{Math Example}

The quadratic formula is:
\\[
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
\\]

\\end{document}`;

export default function LatexPreview() {
  const [latexCode, setLatexCode] = useState<string>(DEFAULT_LATEX);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isCompiling, setIsCompiling] = useState(false);
  const [lastCompiledLatex, setLastCompiledLatex] = useState<string>('');

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.languages.register({ id: 'latex' });
      monaco.languages.setLanguageConfiguration('latex', latexLanguageConfiguration);
      monaco.languages.setMonarchTokensProvider('latex', latexTokenProvider);
      registerLatexCompletions(monaco);
    });
  }, []);

  const compileLatex = async (latex: string) => {
    if (lastCompiledLatex === latex && previewUrl) return;
    if (!latex.trim()) return;

    setIsCompiling(true);
    try {
      const response = await fetch('/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latex }),
      });

      if (response.ok) {
        const data = await response.json();
        setPreviewUrl(data.previewUrl || data.pdfUrl || '');
        setLastCompiledLatex(latex);
      }
    } catch (err) {
      console.error('Compilation error:', err);
    } finally {
      setIsCompiling(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      compileLatex(latexCode);
    }, 1000);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latexCode]);

  // Initial compile
  useEffect(() => {
    compileLatex(DEFAULT_LATEX);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn("min-h-screen bg-gray-50", dmSans.className)}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Tools</span>
          </Link>
        </div>

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-3">LaTeX Preview</h1>
          <p className="text-lg text-gray-600">Live LaTeX editor with instant PDF preview</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Code Editor Section */}
          <div className="flex flex-col">
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-900 border border-blue-200">
                  CODE
                </span>
                <h2 className="text-xl font-medium text-gray-900">LaTeX Editor</h2>
              </div>
              <p className="text-sm text-gray-600">
                Edit your LaTeX code here
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

          {/* Preview Section */}
          <div className="flex flex-col">
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-green-50 px-3 py-1.5 text-sm font-medium text-green-900 border border-green-200">
                  PREVIEW
                </span>
                <h2 className="text-xl font-medium text-gray-900">PDF Output</h2>
              </div>
              <p className="text-sm text-gray-600">
                {isCompiling ? 'Compiling...' : 'Live preview of your document'}
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl h-[600px] w-full flex flex-col overflow-hidden">
              <div className="flex-1 overflow-hidden rounded-lg">
                {isCompiling && !previewUrl ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Loader2 className="mx-auto h-12 w-12 text-blue-500 animate-spin mb-4" />
                      <p className="text-gray-600">Compiling LaTeX...</p>
                    </div>
                  </div>
                ) : previewUrl ? (
                  <PDFPreview pdfUrl={previewUrl} />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-400">Preview will appear here...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 