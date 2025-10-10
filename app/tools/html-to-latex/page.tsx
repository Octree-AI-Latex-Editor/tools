'use client';

import { useState, useEffect } from 'react';
import { Code2, Eye, Loader2, Download, ChevronDown, ArrowLeft } from 'lucide-react';
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

const DEFAULT_HTML = `<article>
  <h1>Sample Document</h1>
  
  <section>
    <h2>Introduction</h2>
    <p>This is a <strong>sample HTML document</strong> that will be converted to LaTeX.</p>
    <p>It supports <em>italic text</em>, <b>bold text</b>, and <code>inline code</code>.</p>
  </section>
  
  <section>
    <h2>Lists</h2>
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  </section>
  
  <section>
    <h2>Table Example</h2>
    <table>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </table>
  </section>
</article>`;

export default function HtmlToLatex() {
  const [htmlInput, setHtmlInput] = useState<string>(DEFAULT_HTML);
  const [latexCode, setLatexCode] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isCompiling, setIsCompiling] = useState(false);
  const [lastCompiledLatex, setLastCompiledLatex] = useState<string>('');
  const [showExportMenu, setShowExportMenu] = useState(false);

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.languages.register({ id: 'latex' });
      monaco.languages.setLanguageConfiguration('latex', latexLanguageConfiguration);
      monaco.languages.setMonarchTokensProvider('latex', latexTokenProvider);
      registerLatexCompletions(monaco);
    });
  }, []);

  const convertHtml = async () => {
    if (!htmlInput.trim()) return;
    
    setIsProcessing(true);
    setError('');
    setLatexCode(''); // Clear previous content

    try {
      const response = await fetch('/api/convert-html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html: htmlInput }),
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
        setLatexCode(accumulatedText);
      }
    } catch (err) {
      setError('Failed to convert HTML. Please try again.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const compileLatex = async (latex: string) => {
    if (lastCompiledLatex === latex && previewUrl) return;

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
    if (latexCode && activeTab === 'preview' && !isProcessing) {
      compileLatex(latexCode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latexCode, activeTab, isProcessing]);

  const exportAsLatex = () => {
    const blob = new Blob([latexCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.tex';
    a.click();
    URL.revokeObjectURL(url);
    setShowExportMenu(false);
  };

  const exportAsPDF = async () => {
    if (!previewUrl) return;
    
    const base64Data = previewUrl.split(',')[1];
    const binaryData = atob(base64Data);
    const bytes = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      bytes[i] = binaryData.charCodeAt(i);
    }
    
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.pdf';
    a.click();
    URL.revokeObjectURL(url);
    setShowExportMenu(false);
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
          <h1 className="text-4xl font-light text-gray-900 mb-3">HTML to LaTeX Converter</h1>
          <p className="text-lg text-gray-600">Convert HTML markup to clean LaTeX code</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="flex flex-col">
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-900 border border-orange-200">
                  INPUT
                </span>
                <h2 className="text-xl font-medium text-gray-900">HTML Code</h2>
              </div>
              <p className="text-sm text-gray-600">
                Paste your HTML markup here
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl h-[520px] w-full flex flex-col overflow-hidden">
              <div className="flex-1 overflow-hidden">
                <Editor
                  height="100%"
                  language="html"
                  value={htmlInput}
                  onChange={(value) => setHtmlInput(value || '')}
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
              onClick={convertHtml}
              disabled={isProcessing || !htmlInput.trim()}
              className="mt-6 w-full px-6 py-3 bg-blue-600 text-white text-base font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Converting...' : 'Convert to LaTeX'}
            </button>

            {error && (
              <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-4">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}
          </div>

          {/* Output Section */}
          <div className="flex flex-col">
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-green-50 px-3 py-1.5 text-sm font-medium text-green-900 border border-green-200">
                  OUTPUT
                </span>
                <h2 className="text-xl font-medium text-gray-900">LaTeX Code</h2>
              </div>
              <p className="text-sm text-gray-600">
                Ready to use in your LaTeX documents
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl h-[520px] w-full flex flex-col overflow-hidden">
              <div className="border-b border-gray-200 flex-shrink-0">
                <div className="flex gap-1 px-6 pt-4">
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'code'
                        ? 'border-gray-900 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Code2 className="h-4 w-4" />
                    Code
                  </button>
                  <button
                    onClick={(e) => {
                      if (isCompiling || isProcessing) {
                        e.preventDefault();
                        return;
                      }
                      setActiveTab('preview');
                    }}
                    disabled={isCompiling || isProcessing}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'preview'
                        ? 'border-blue-600 text-gray-900 bg-blue-50'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    } ${(isCompiling || isProcessing) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <Eye className="h-4 w-4" />
                    Preview
                    {isProcessing && (
                      <span className="text-xs text-gray-400">(Generating...)</span>
                    )}
                    {!isProcessing && isCompiling && (
                      <span className="text-xs text-gray-400">(Compiling...)</span>
                    )}
                  </button>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col overflow-hidden">
                {!latexCode && isProcessing ? (
                  <div className="flex items-center justify-center flex-1">
                    <div className="text-center">
                      <Loader2 className="mx-auto h-12 w-12 text-blue-500 animate-spin mb-4" />
                      <p className="text-gray-600">Converting to LaTeX...</p>
                    </div>
                  </div>
                ) : latexCode ? (
                  activeTab === 'code' ? (
                    <div className="flex-1 overflow-hidden rounded-lg relative">
                      <Editor
                        height="100%"
                        language="latex"
                        value={latexCode}
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
                    <div className="flex-1 overflow-hidden rounded-lg">
                      {isCompiling ? (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center">
                            <Loader2 className="mx-auto h-8 w-8 text-blue-500 animate-spin mb-2" />
                            <p className="text-sm text-gray-600">Generating preview...</p>
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
                  )
                ) : (
                  <div className="flex items-center justify-center flex-1">
                    <p className="text-gray-400">Converted LaTeX will appear here...</p>
                  </div>
                )}
              </div>
            </div>

            {latexCode && !isProcessing && (
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => openInOctree({ latex: latexCode, title: 'HTML Import', source: 'tools:html' })}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-base font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <OctreeLogo className="h-5 w-5" />
                  Open in Octree
                </button>
                
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
                        onClick={exportAsLatex}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Export as LaTeX
                      </button>
                      <button
                        onClick={exportAsPDF}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Export as PDF
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