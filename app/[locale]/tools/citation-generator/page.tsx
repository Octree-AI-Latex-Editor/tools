'use client';

import { useState, useEffect } from 'react';
import { Code2, Eye, Loader2, Download, ArrowLeft } from 'lucide-react';
import { DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { loader } from '@monaco-editor/react';
import { OctreeCTA } from '@/components/OctreeCTA';
import { OctreeLogo } from '@/components/icons/octree-logo';
import { openInOctree } from '@/lib/open-in-octree';
import { Button } from '@/components/ui/button';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import type { Locale } from '@/lib/i18n/config';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

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
  const t = useTranslations('toolsSpecific.citationGenerator');
  const tTools = useTranslations('tools');
  const tCommon = useTranslations('common');
  const locale = useLocale() as Locale;
  
  const [citationInput, setCitationInput] = useState<string>(DEFAULT_INPUT);
  const [bibtexCode, setBibtexCode] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');
  const [latestLatexDocument, setLatestLatexDocument] = useState<string>('');

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
      setError(t('failedToGenerate'));
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  // Build LaTeX document for "Open in Octree" whenever bibtex changes
  useEffect(() => {
    if (!bibtexCode) return;
    const citationKeys: string[] = [];
    const keyRegex = /@\w+\{([^,]+),/g;
    let match;
    while ((match = keyRegex.exec(bibtexCode)) !== null) {
      citationKeys.push(match[1].trim());
    }
    if (citationKeys.length === 0) {
      citationKeys.push('citation');
    }
    const allKeys = citationKeys.join(',');
    const individualCites = citationKeys.map(key => `\\cite{${key}}`).join(', ');
    const latexDocument = `\\documentclass[12pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[margin=1in]{geometry}
\\usepackage{natbib}

\\begin{document}

\\noindent\\textbf{In-text:} ${individualCites}

\\vspace{0.5em}

\\noindent\\textbf{Grouped:} \\citep{${allKeys}}

\\vspace{1.5em}

\\renewcommand{\\refname}{References}
\\bibliographystyle{plainnat}
\\bibliography{references}

\\end{document}`;
    setLatestLatexDocument(latexDocument);
  }, [bibtexCode]);

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
        {/* testing purposes only */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
          <LanguageSwitcher currentLocale={locale} />
        </div> */}
        <div className="mb-12">
          <div className="relative flex items-start justify-center mb-3">
            <Link href="/" className="absolute left-0 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">{tCommon('backToTools')}</span>
            </Link>
            <h1 className="text-4xl font-light text-gray-900">{t('title')}</h1>
          </div>
          <p className="text-lg text-gray-600 text-center">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="flex flex-col">
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-900 border border-orange-200">
                  {tTools('input')}
                </span>
                <h2 className="text-xl font-medium text-gray-900">{t('citationDetailsLabel')}</h2>
              </div>
              <p className="text-sm text-gray-600">
                {t('citationDetailsHint')}
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl h-[520px] w-full flex flex-col overflow-hidden">
              <textarea
                value={citationInput}
                onChange={(e) => setCitationInput(e.target.value)}
                placeholder={t('placeholder')}
                className="flex-1 p-6 resize-none focus:outline-none text-gray-900 placeholder:text-gray-400 text-sm"
                disabled={isProcessing}
              />
            </div>

            <Button
              onClick={generateCitation}
              disabled={isProcessing || !citationInput.trim()}
              variant="gradient"
              size="lg"
              className="mt-2 w-full"
            >
              {isProcessing ? t('generating') : t('generateBibtex')}
            </Button>

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
                  {tTools('output')}
                </span>
                <h2 className="text-xl font-medium text-gray-900">{t('outputLabel')}</h2>
              </div>
              <p className="text-sm text-gray-600">
                {t('readyToAdd')}
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
                    {tTools('codeTab')}
                  </button>
                  <button
                    onClick={(e) => {
                      if (isProcessing) {
                        e.preventDefault();
                        return;
                      }
                      setActiveTab('preview');
                    }}
                    disabled={isProcessing}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'preview'
                        ? 'border-blue-600 text-gray-900 bg-blue-50'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <Eye className="h-4 w-4" />
                    {tTools('previewTab')}
                    {isProcessing && (
                      <span className="text-xs text-gray-400">({t('generating')})</span>
                    )}
                  </button>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col overflow-hidden">
                {!bibtexCode && isProcessing ? (
                  <div className="flex items-center justify-center flex-1">
                    <div className="text-center">
                      <Loader2 className="mx-auto h-12 w-12 text-blue-500 animate-spin mb-4" />
                      <p className="text-gray-600">{t('generatingBibtex')}</p>
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
                          {t('generating')}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex-1 flex items-center justify-center rounded-lg">
                      <div className="text-center max-w-sm">
                        <Eye className="mx-auto h-10 w-10 text-gray-300 mb-4" />
                        <p className="text-gray-600 mb-2 font-medium">Preview in Octree</p>
                        <p className="text-sm text-gray-400 mb-6">
                          Open your citation document in Octree to compile and preview the formatted references.
                        </p>
                        <button
                          onClick={() => openInOctree({
                            latex: latestLatexDocument,
                            title: 'Citation Preview',
                            source: 'tools:citation-generator',
                          })}
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors shadow-sm"
                        >
                          <OctreeLogo className="h-5 w-5" />
                          Open in Octree
                        </button>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="flex items-center justify-center flex-1">
                    <p className="text-gray-400">{t('bibtexWillAppear')}</p>
                  </div>
                )}
              </div>
            </div>

            {bibtexCode && !isProcessing && (
              <div className="mt-6">
                <button
                  onClick={exportAsBibtex}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-base font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <Download className="h-5 w-5" />
                  {t('exportAsBib')}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <OctreeCTA source="tools:citation-generator" />
        </div>
      </div>

    </div>
  );
} 