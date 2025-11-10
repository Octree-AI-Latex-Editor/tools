'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { OctreeLogo } from '@/components/icons/octree-logo';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { loader } from '@monaco-editor/react';
import {
  latexLanguageConfiguration,
  latexTokenProvider,
  registerLatexCompletions,
} from '@/lib/editor-config';
import { openInOctree } from '@/lib/open-in-octree';
import { CompileErrorModal } from '@/components/CompileErrorModal';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

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
  const [compileError, setCompileError] = useState<string>('');
  const [showCompileErrorModal, setShowCompileErrorModal] = useState(false);
  const [latestLatexDocument, setLatestLatexDocument] = useState<string>(DEFAULT_LATEX);

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
    setCompileError('');
    setLatestLatexDocument(latex);
    try {
      const response = await fetch('/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latex }),
      });

      if (!response.ok) {
        let message = 'Failed to compile LaTeX.';
        try {
          const data = await response.json();
          if (data?.error) {
            message = data.error;
          }
        } catch {
          // ignore parse errors
        }
        throw new Error(message);
      }

      const data = await response.json();
      setPreviewUrl(data.previewUrl || data.pdfUrl || '');
      setLastCompiledLatex(latex);
    } catch (err) {
      console.error('Compilation error:', err);
      setPreviewUrl('');
      setLastCompiledLatex('');
      const fallbackMessage =
        err instanceof Error ? err.message : 'Failed to compile LaTeX.';
      setCompileError(fallbackMessage);
      setShowCompileErrorModal(true);
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
          <h1 className="text-4xl font-light text-gray-900 mb-3">LaTeX Editor</h1>
          <p className="text-lg text-gray-600">Edit and work with your LaTeX code</p>
        </div>

        <div className="max-w-5xl mx-auto">
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

            <div className="mt-6">
              <button
                onClick={() => openInOctree({ latex: latexCode, title: 'LaTeX Editor', source: 'tools:preview' })}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-base font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <OctreeLogo className="h-5 w-5" />
                Open in Octree
              </button>
            </div>
          </div>
        </div>
      </div>
      <CompileErrorModal
        isOpen={showCompileErrorModal}
        errorMessage={compileError}
        latex={latestLatexDocument}
        onClose={() => setShowCompileErrorModal(false)}
        source="tools:latex-preview"
        title="LaTeX Preview"
      />
    </div>
  );
} 