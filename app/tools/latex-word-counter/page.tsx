'use client';

import { useState, useCallback, useEffect } from 'react';
import { Upload, Loader2, ArrowLeft } from 'lucide-react';
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

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });
const PDFPreview = dynamic(() => import('@/components/PDFPreview'), { ssr: false });

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

interface WordCountResult {
  wordCount: number;
  charCountWithSpaces: number;
  charCountWithoutSpaces: number;
  pageCount: number;
  paragraphCount: number;
  fullText: string;
  latexCode: string;
  pdfData: string;
}

export default function LatexWordCounter() {
  const [pdfData, setPdfData] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');
  const [result, setResult] = useState<WordCountResult | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string>('');

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.languages.register({ id: 'latex' });
      monaco.languages.setLanguageConfiguration('latex', latexLanguageConfiguration);
      monaco.languages.setMonarchTokensProvider('latex', latexTokenProvider);
      registerLatexCompletions(monaco);
    });
  }, []);

  const countWords = async (pdfBase64: string) => {
    setIsProcessing(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/count-words', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pdfData: pdfBase64 }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to count words');
      }

      const data = await response.json();
      if (data.success) {
        setResult(data);
      } else {
        throw new Error(data.error || 'Failed to count words');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to count words in PDF. Please try again.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };


  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setError('Only PDF files are supported.');
        return;
      }

      setUploadedFileName(file.name);
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target?.result as string;
        setPdfData(data);
        countWords(data);
      };

      reader.readAsDataURL(file);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setError('Only PDF files are supported.');
        return;
      }

      setUploadedFileName(file.name);
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target?.result as string;
        setPdfData(data);
        countWords(data);
      };

      reader.readAsDataURL(file);
    }
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

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
          <h1 className="text-4xl font-light text-gray-900 mb-3">LaTeX Word Counter</h1>
          <p className="text-lg text-gray-600">Count the exact number of words in your PDF documents</p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* LaTeX Preview Section */}
          <div className="flex flex-col">
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-900 border border-orange-200">
                  INPUT
                </span>
                <h2 className="text-xl font-medium text-gray-900">LaTeX Code</h2>
              </div>
              <p className="text-sm text-gray-600">
                Upload your PDF file to count words
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl h-[520px] w-full flex flex-col overflow-hidden">
              <div className="p-6 flex-1 flex flex-col overflow-hidden">
                {!result?.latexCode && isProcessing ? (
                  <div className="flex items-center justify-center flex-1">
                    <div className="text-center">
                      <Loader2 className="mx-auto h-12 w-12 text-blue-500 animate-spin mb-4" />
                      <p className="text-gray-600">Analyzing PDF and counting words...</p>
                    </div>
                  </div>
                ) : result?.latexCode ? (
                  <div className="flex-1 overflow-hidden rounded-lg relative">
                    <Editor
                      height="100%"
                      language="latex"
                      value={result.latexCode}
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
                  </div>
                ) : (
                  <div className="flex items-center justify-center flex-1">
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <p className="text-gray-400">Upload a PDF to extract text and count words</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {!result && (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`mt-6 relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                  isDragging
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                } ${isProcessing ? 'opacity-50 pointer-events-none' : ''}`}
              >
                <p className="text-sm text-gray-500 mb-2">
                  Drag and drop your PDF here or{' '}
                  <label className="text-blue-600 hover:text-blue-500 cursor-pointer font-medium">
                    browse files
                    <input
                      type="file"
                      className="hidden"
                      accept="application/pdf,.pdf"
                      onChange={handleFileInput}
                      disabled={isProcessing}
                    />
                  </label>
                </p>
              </div>
            )}

            {error && (
              <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-4">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}
          </div>

          {/* PDF Preview Section */}
          <div className="flex flex-col">
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-green-50 px-3 py-1.5 text-sm font-medium text-green-900 border border-green-200">
                  OUTPUT
                </span>
                <h2 className="text-xl font-medium text-gray-900">PDF Preview</h2>
              </div>
              <p className="text-sm text-gray-600">
                Original PDF document
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl h-[520px] w-full flex flex-col overflow-hidden">
              {isProcessing ? (
                <div className="flex items-center justify-center flex-1">
                  <div className="text-center">
                    <Loader2 className="mx-auto h-12 w-12 text-blue-500 animate-spin mb-4" />
                    <p className="text-gray-600">Loading PDF...</p>
                  </div>
                </div>
              ) : pdfData ? (
                <PDFPreview pdfUrl={pdfData} />
              ) : (
                <div className="flex items-center justify-center flex-1">
                  <div className="text-center">
                    <p className="text-gray-400">PDF preview will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Word Count Statistics - Below the grid, not in a box */}
        {result && (
          <div className="mt-8">
            <div className="grid grid-cols-5 gap-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">Words</div>
                <div className="text-2xl font-normal text-gray-900">{formatNumber(result.wordCount)}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Pages</div>
                <div className="text-2xl font-normal text-gray-900">{formatNumber(result.pageCount)}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Characters (with spaces)</div>
                <div className="text-2xl font-normal text-gray-900">{formatNumber(result.charCountWithSpaces)}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Characters (no spaces)</div>
                <div className="text-2xl font-normal text-gray-900">{formatNumber(result.charCountWithoutSpaces)}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Paragraphs</div>
                <div className="text-2xl font-normal text-gray-900">{formatNumber(result.paragraphCount)}</div>
              </div>
            </div>

            {result.latexCode && (
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => openInOctree({ latex: result.latexCode, title: 'PDF Word Count', source: 'tools:word-counter' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-base font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <OctreeLogo className="h-5 w-5" />
                  Open in Octree
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
