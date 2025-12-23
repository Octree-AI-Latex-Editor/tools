'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Upload,
  Code2,
  Eye,
  Loader2,
  Download,
  ChevronDown,
  ArrowLeft,
  Copy,
  Check,
  X,
  Sparkles,
} from 'lucide-react';
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
import { OctreeCTA } from '@/components/OctreeCTA';
import { useImageUpload } from '@/hooks/use-image-upload';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import type { Locale } from '@/lib/i18n/config';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });
const KatexPreview = dynamic(() => import('@/components/KatexPreview'), { ssr: false });

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const LATEX_TEMPLATE = (equationContent: string) => `\\documentclass{article}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{amsfonts}
\\usepackage{mathtools}

\\begin{document}

${equationContent}

\\end{document}`;

export default function EquationToLatexClient() {
  const t = useTranslations('toolsSpecific.equationToLatex');
  const tTools = useTranslations('tools');
  const tCommon = useTranslations('common');
  const locale = useLocale() as Locale;
  
  const [equationText, setEquationText] = useState<string>('');
  const [latexCode, setLatexCode] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [compileError, setCompileError] = useState<string>('');
  const [showCompileErrorModal, setShowCompileErrorModal] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const {
    imageData,
    isDragging,
    error: imageError,
    fileName,
    clearImage,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileInput,
  } = useImageUpload();

  const { copied, copyToClipboard } = useCopyToClipboard();

  // Initialize Monaco with LaTeX syntax highlighting
  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.languages.register({ id: 'latex' });
      monaco.languages.setLanguageConfiguration('latex', latexLanguageConfiguration);
      monaco.languages.setMonarchTokensProvider('latex', latexTokenProvider);
      registerLatexCompletions(monaco);
    });
  }, []);

  const convertToLatex = useCallback(async () => {
    if (!equationText.trim() && !imageData) {
      setError(t('pleaseEnterEquation'));
      return;
    }

    if (equationText.length > 2000) {
      setError(t('equationTooLong'));
      return;
    }

    setIsProcessing(true);
    setError('');
    setLatexCode('');
    setActiveTab('code');
    try {
      const response = await fetch('/api/equation-to-latex', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          equation: equationText.trim() || undefined,
          image: imageData || undefined,
        }),
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
        setLatexCode(LATEX_TEMPLATE(accumulatedText));
      }
    } catch (err) {
      setError(t('failedToConvert'));
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  }, [equationText, imageData]);



  const exportAsLatex = () => {
    const blob = new Blob([latexCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'equation.tex';
    a.click();
    URL.revokeObjectURL(url);
    setShowExportMenu(false);
  };

  const exportAsPDF = async () => {
    if (!latexCode) return;

    setIsExporting(true);
    setCompileError('');
    try {
      const response = await fetch('/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latex: latexCode }),
      });

      if (!response.ok) {
        let message = tTools('failedToCompile');
        try {
          const data = await response.json();
          if (data?.error) {
            message = data.error;
          }
        } catch {
          // Ignore parse errors
        }
        throw new Error(message);
      }

      const data = await response.json();
      const pdfUrl = data.previewUrl || data.pdfUrl || '';
      
      if (!pdfUrl) {
        throw new Error(tTools('noPdfUrl'));
      }

      const base64Data = pdfUrl.split(',')[1];
      const binaryData = atob(base64Data);
      const bytes = new Uint8Array(binaryData.length);
      for (let i = 0; i < binaryData.length; i++) {
        bytes[i] = binaryData.charCodeAt(i);
      }

      const blob = new Blob([bytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'equation.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Export error:', err);
      const fallbackMessage =
        err instanceof Error ? err.message : tTools('failedToExportPdf');
      setCompileError(fallbackMessage);
      setShowCompileErrorModal(true);
    } finally {
      setIsExporting(false);
      setShowExportMenu(false);
    }
  };

  const displayError = error || imageError;

  return (
    <div className={cn('min-h-screen bg-gray-50', dmSans.className)}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* testing purposes only */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
          <LanguageSwitcher currentLocale={locale} />
        </div> */}
        <div className="mb-12">
          <div className="relative flex items-start justify-center mb-3">
            <Link
              href="/"
              className="absolute left-0 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">{tCommon('backToTools')}</span>
            </Link>
            <h1 className="text-4xl font-light text-gray-900">
              {t('title')}
            </h1>
          </div>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-900 border border-orange-200">
                  {tTools('input')}
                </span>
                <h2 className="text-xl font-medium text-gray-900">
                  {t('inputLabel')}
                </h2>
              </div>
              <p className="text-sm text-gray-600">
                {t('inputHint')}
              </p>
            </div>

            <div className={cn(
              "bg-white border border-gray-200 rounded-xl mb-4 overflow-hidden transition-opacity",
              imageData && "opacity-50"
            )}>
              <textarea
                value={equationText}
                onChange={(e) => setEquationText(e.target.value)}
                placeholder={imageData 
                  ? t('placeholderWithImage')
                  : t('placeholder')}
                className={cn(
                  "w-full h-32 p-4 resize-none focus:outline-none text-gray-900 placeholder:text-gray-400 text-sm",
                  imageData && "cursor-not-allowed bg-gray-50"
                )}
                disabled={isProcessing || !!imageData}
                maxLength={2000}
              />
              <div className="px-4 py-2 border-t border-gray-100 text-xs text-gray-400 text-right">
                {imageData ? (
                  <span className="text-orange-600">{t('imageUploaded')}</span>
                ) : (
                  `${equationText.length}/2000`
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={cn(
                'relative border-2 border-dashed rounded-xl p-8 text-center transition-all h-[240px] flex flex-col items-center justify-center',
                isDragging
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 bg-white hover:border-gray-400',
                isProcessing && 'opacity-50 pointer-events-none'
              )}
            >
              {imageData ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageData}
                    alt="Uploaded equation"
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                  <button
                    onClick={clearImage}
                    className="absolute top-0 right-0 p-1 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <X className="h-4 w-4 text-gray-600" />
                  </button>
                  {fileName && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-2 py-1 rounded-b-lg truncate">
                      {fileName}
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Upload className="h-10 w-10 text-gray-400 mb-3" />
                  <p className="text-sm text-gray-900 font-normal mb-1">
                    {t('dropImageHere')}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    {t('orBrowseFiles')}{' '}
                    <label className="text-blue-600 hover:text-blue-500 cursor-pointer font-medium">
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileInput}
                        disabled={isProcessing}
                      />
                    </label>
                  </p>
                  <div className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {t('fileFormats')}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={convertToLatex}
              disabled={isProcessing || (!equationText.trim() && !imageData)}
              className="mt-6 w-full px-6 py-3 bg-blue-600 text-white text-base font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  {t('converting')}
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  {t('convertToLatex')}
                </>
              )}
            </button>

            {displayError && (
              <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-4">
                <p className="text-sm text-red-800">{displayError}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-green-50 px-3 py-1.5 text-sm font-medium text-green-900 border border-green-200">
                  {tTools('output')}
                </span>
                <h2 className="text-xl font-medium text-gray-900">{t('outputLabel')}</h2>
              </div>
              <p className="text-sm text-gray-600">
                {t('readyToUse')}
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl h-[520px] w-full flex flex-col overflow-hidden">
              {/* Tabs */}
              <div className="border-b border-gray-200 flex-shrink-0">
                <div className="flex gap-1 px-6 pt-4">
                  <button
                    onClick={() => setActiveTab('code')}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors',
                      activeTab === 'code'
                        ? 'border-gray-900 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    )}
                  >
                    <Code2 className="h-4 w-4" />
                    {tTools('codeTab')}
                  </button>
                  <button
                    onClick={() => setActiveTab('preview')}
                    disabled={isProcessing}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors',
                      activeTab === 'preview'
                        ? 'border-blue-600 text-gray-900 bg-blue-50'
                        : 'border-transparent text-gray-500 hover:text-gray-700',
                      isProcessing && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    <Eye className="h-4 w-4" />
                    {tTools('previewTab')}
                    {isProcessing && (
                      <span className="text-xs text-gray-400">({t('converting')})</span>
                    )}
                  </button>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col overflow-hidden">
                {!latexCode && isProcessing ? (
                  <div className="flex items-center justify-center flex-1">
                    <div className="text-center">
                      <Loader2 className="mx-auto h-12 w-12 text-blue-500 animate-spin mb-4" />
                      <p className="text-gray-600">{t('convertingToLatex')}</p>
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
                      <button
                        onClick={() => copyToClipboard(latexCode)}
                        className="absolute top-2 right-2 p-2 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
                        title={tCommon('copy')}
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-600" />
                        )}
                      </button>
                      {isProcessing && (
                        <div className="absolute top-2 right-12 flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-md text-sm shadow-sm">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          {t('converting')}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex-1 min-h-0 rounded-lg bg-white border border-gray-100">
                      <KatexPreview
                        latex={latexCode}
                        displayMode={true}
                        className="p-6 text-2xl text-gray-900 h-full w-full"
                      />
                    </div>
                  )
                ) : (
                  <div className="flex items-center justify-center flex-1">
                    <p className="text-gray-400">{t('generatedLatexWillAppear')}</p>
                  </div>
                )}
              </div>
            </div>

            {latexCode && !isProcessing && (
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() =>
                    openInOctree({
                      latex: latexCode,
                      title: 'Equation to LaTeX',
                      source: 'tools:equation-to-latex',
                    })
                  }
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-base font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <OctreeLogo className="h-5 w-5" />
                  {tCommon('openInOctree')}
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowExportMenu(!showExportMenu)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-base font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <Download className="h-5 w-5" />
                    {tCommon('export')}
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {showExportMenu && (
                    <div className="absolute bottom-full mb-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[160px] z-10">
                      <button
                        onClick={exportAsLatex}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {tTools('exportAsLatex')}
                      </button>
                      <button
                        onClick={exportAsPDF}
                        disabled={isExporting}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 flex items-center gap-2"
                      >
                        {isExporting ? (
                          <>
                            <Loader2 className="h-3 w-3 animate-spin" />
                            {tTools('compilingLatex')}
                          </>
                        ) : (
                          tTools('exportAsPdf')
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <OctreeCTA source="tools:equation-to-latex" />
        </div>
      </div>

      <CompileErrorModal
        isOpen={showCompileErrorModal}
        errorMessage={compileError}
        latex={latexCode}
        onClose={() => setShowCompileErrorModal(false)}
        source="tools:equation-to-latex"
        title={t('title')}
      />
    </div>
  );
}
