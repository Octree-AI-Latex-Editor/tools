'use client';

import { useState, useEffect } from 'react';
import { Code2, Eye, Loader2, Download, ArrowLeft } from 'lucide-react';
import { DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { OctreeLogo } from '@/components/icons/octree-logo';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { loader } from '@monaco-editor/react';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });
const PDFPreview = dynamic(() => import('@/components/PDFPreview'), { ssr: false });

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const DEFAULT_INPUT = `Title: Deep Learning for Computer Vision
Author: Ian Goodfellow, Yoshua Bengio
Year: 2016
Publisher: MIT Press
Type: book

OR paste a DOI:
10.1038/nature14539

OR paste article details:
A Survey of Deep Learning Techniques
by John Smith and Jane Doe
Published in IEEE Transactions 2023`;

export default function CitationGenerator() {
  const [citationInput, setCitationInput] = useState<string>(DEFAULT_INPUT);
  const [bibtexCode, setBibtexCode] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isCompiling, setIsCompiling] = useState(false);
  const [lastCompiledBibtex, setLastCompiledBibtex] = useState<string>('');

  useEffect(() => {
    loader.init().then((monaco) => {
      // Register BibTeX language if not already registered
      const languages = monaco.languages.getLanguages();
      if (!languages.find(lang => lang.id === 'bibtex')) {
        monaco.languages.register({ id: 'bibtex' });
        monaco.languages.setMonarchTokensProvider('bibtex', {
          defaultToken: '',
          tokenizer: {
            root: [
              [/@[a-zA-Z]+/, 'keyword'],
              [/[{}]/, 'delimiter'],
              [/[a-zA-Z]+\s*=/, 'attribute'],
              [/".*?"/, 'string'],
            ],
          },
        });
      }
    });
  }, []);

  const generateCitation = async () => {
    if (!citationInput.trim()) return;
    
    setIsProcessing(true);
    setError('');
    setBibtexCode(''); // Clear previous content

    try {
      const response = await fetch('/api/generate-citation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: citationInput }),
      });

      if (!response.ok) throw new Error('Citation generation failed');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) throw new Error('No response body');

      let accumulatedText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulatedText += chunk;
        setBibtexCode(accumulatedText);
      }
    } catch (err) {
      setError('Failed to generate citation. Please try again.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const compileBibtex = async (bibtex: string) => {
    if (lastCompiledBibtex === bibtex && previewUrl) return;

    setIsCompiling(true);
    try {
      // Create a complete LaTeX document that uses the BibTeX citation
      const citationKey = bibtex.match(/@\w+\{([^,]+),/)?.[1] || 'citation';
      const latexDocument = `\\documentclass{article}
\\usepackage{cite}
\\begin{document}

\\section{Sample Citation}

This is a sample document showing how the citation will appear in your LaTeX document~\\cite{${citationKey}}.

\\bibliographystyle{plain}
\\begin{thebibliography}{1}

\\bibitem{${citationKey}}
${bibtex.replace(/@\w+\{[^,]+,/, '').replace(/}/g, '').split('\n').filter(line => line.trim()).map(line => {
  const match = line.match(/(\w+)\s*=\s*[{"](.*?)["}]/);
  if (match) {
    const [, field, value] = match;
    return value;
  }
  return '';
}).filter(Boolean).join(', ')}

\\end{thebibliography}

\\end{document}`;

      const response = await fetch('/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latex: latexDocument }),
      });

      if (response.ok) {
        const data = await response.json();
        setPreviewUrl(data.previewUrl || data.pdfUrl || '');
        setLastCompiledBibtex(bibtex);
      }
    } catch (err) {
      console.error('Compilation error:', err);
    } finally {
      setIsCompiling(false);
    }
  };

  useEffect(() => {
    if (bibtexCode && activeTab === 'preview' && !isProcessing) {
      compileBibtex(bibtexCode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bibtexCode, activeTab, isProcessing]);

  const exportAsBibtex = () => {
    const blob = new Blob([bibtexCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'references.bib';
    a.click();
    URL.revokeObjectURL(url);
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
          <h1 className="text-4xl font-light text-gray-900 mb-3">LaTeX Citation Generator</h1>
          <p className="text-lg text-gray-600">Generate BibTeX citations from article details, DOIs, or URLs</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="flex flex-col">
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-900 border border-orange-200">
                  INPUT
                </span>
                <h2 className="text-xl font-medium text-gray-900">Citation Details</h2>
              </div>
              <p className="text-sm text-gray-600">
                Enter article details, DOI, or URL
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl h-[520px] w-full flex flex-col overflow-hidden">
              <textarea
                value={citationInput}
                onChange={(e) => setCitationInput(e.target.value)}
                placeholder="Enter citation details..."
                className="flex-1 p-6 resize-none focus:outline-none text-gray-900 placeholder:text-gray-400 text-sm"
                disabled={isProcessing}
              />
            </div>

            <button
              onClick={generateCitation}
              disabled={isProcessing || !citationInput.trim()}
              className="mt-6 w-full px-6 py-3 bg-blue-600 text-white text-base font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Generating...' : 'Generate BibTeX'}
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
                <h2 className="text-xl font-medium text-gray-900">BibTeX Code</h2>
              </div>
              <p className="text-sm text-gray-600">
                Ready to add to your .bib file
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
                {!bibtexCode && isProcessing ? (
                  <div className="flex items-center justify-center flex-1">
                    <div className="text-center">
                      <Loader2 className="mx-auto h-12 w-12 text-blue-500 animate-spin mb-4" />
                      <p className="text-gray-600">Generating BibTeX...</p>
                    </div>
                  </div>
                ) : bibtexCode ? (
                  activeTab === 'code' ? (
                    <div className="flex-1 overflow-hidden rounded-lg relative">
                      <Editor
                        height="100%"
                        language="bibtex"
                        value={bibtexCode}
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
                          Generating...
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
                    <p className="text-gray-400">BibTeX citation will appear here...</p>
                  </div>
                )}
              </div>
            </div>

            {bibtexCode && !isProcessing && (
              <div className="mt-6 flex gap-3">
                <a
                  href="https://useoctree.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-base font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <OctreeLogo className="h-5 w-5" />
                  Open in Octree
                </a>
                
                <button
                  onClick={exportAsBibtex}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-base font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <Download className="h-5 w-5" />
                  Export
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 