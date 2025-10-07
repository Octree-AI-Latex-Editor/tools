'use client';

import { useState, useCallback, useEffect } from 'react';
import { Upload, Code2, Eye, Loader2, Download, ChevronDown, ArrowLeft } from 'lucide-react';
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

interface AIToolLayoutProps {
  title: string;
  description: string;
  apiEndpoint: string;
  inputLabel?: string;
  outputLabel?: string;
  acceptedFormats?: string;
}

export default function AIToolLayout({
  title,
  description,
  apiEndpoint,
  inputLabel = 'Your Handwritten Notes',
  outputLabel = 'Clean LaTeX Code',
  acceptedFormats = 'JPEG, PNG, PDF',
}: AIToolLayoutProps) {
  const [imageData, setImageData] = useState<string>('');
  const [latexCode, setLatexCode] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isCompiling, setIsCompiling] = useState(false);
  const [lastCompiledLatex, setLastCompiledLatex] = useState<string>('');
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string>('');
  const [isTableFile, setIsTableFile] = useState(false);
  const [fileType, setFileType] = useState<string>('math');

  // Convert acceptedFormats to file accept attribute
  const getAcceptAttribute = () => {
    if (acceptedFormats.includes('CSV')) return '.csv,.json,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    if (acceptedFormats.includes('PDF')) return 'application/pdf';
    return 'image/*,.pdf';
  };

  // Initialize Monaco with LaTeX syntax highlighting
  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.languages.register({ id: 'latex' });
      monaco.languages.setLanguageConfiguration(
        'latex',
        latexLanguageConfiguration
      );
      monaco.languages.setMonarchTokensProvider('latex', latexTokenProvider);
      registerLatexCompletions(monaco);
    });
  }, []);

  const processImage = async (image: string) => {
    setIsProcessing(true);
    setError('');
    setLatexCode(''); // Clear previous content

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image, type: fileType }),
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
      setError('Failed to process image. Please try again.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const compileLatex = async (latex: string) => {
    // Check if we already have a cached preview for this LaTeX
    if (lastCompiledLatex === latex && previewUrl) {
      return;
    }

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

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFileName(file.name);
      const reader = new FileReader();
      
      // Detect file type
      let detectedType = 'math';
      if (file.name.endsWith('.csv') || file.type === 'text/csv') {
        detectedType = 'csv';
      } else if (file.name.endsWith('.json') || file.type === 'application/json') {
        detectedType = 'json';
      } else if (file.name.endsWith('.xlsx') || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        detectedType = 'xlsx';
      }
      
      const isTable = detectedType === 'csv' || detectedType === 'json' || detectedType === 'xlsx';
      setIsTableFile(isTable);
      setFileType(detectedType);
      
      reader.onload = (event) => {
        const data = event.target?.result as string;
        setImageData(data);
        processImage(data);
      };
      
      // Handle different file types
      if (isTable) {
        reader.readAsText(file);
      } else {
        reader.readAsDataURL(file);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      setUploadedFileName(file.name);
      const reader = new FileReader();
      
      // Detect file type
      let detectedType = 'math';
      if (file.name.endsWith('.csv') || file.type === 'text/csv') {
        detectedType = 'csv';
      } else if (file.name.endsWith('.json') || file.type === 'application/json') {
        detectedType = 'json';
      } else if (file.name.endsWith('.xlsx') || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        detectedType = 'xlsx';
      }
      
      const isTable = detectedType === 'csv' || detectedType === 'json' || detectedType === 'xlsx';
      setIsTableFile(isTable);
      setFileType(detectedType);
      
      reader.onload = (event) => {
        const data = event.target?.result as string;
        setImageData(data);
        processImage(data);
      };
      
      // Handle different file types
      if (isTable) {
        reader.readAsText(file);
      } else {
        reader.readAsDataURL(file);
      }
    }
  };

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

  const exportAsImage = async () => {
    if (!previewUrl) return;

    try {
      // Dynamically import pdfjs
      const pdfjsLib = await import('pdfjs-dist');
      
      // Convert base64 to Uint8Array
      const base64Data = previewUrl.split(',')[1];
      const binaryData = atob(base64Data);
      const bytes = new Uint8Array(binaryData.length);
      for (let i = 0; i < binaryData.length; i++) {
        bytes[i] = binaryData.charCodeAt(i);
      }

      // Load PDF
      const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
      const page = await pdf.getPage(1);
      
      // Prepare canvas
      const viewport = page.getViewport({ scale: 2.0 });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      // Render PDF page to canvas
      if (context) {
        // @ts-expect-error - pdfjs types are incomplete
        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;
      }

      // Convert canvas to JPG
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'document.jpg';
          a.click();
          URL.revokeObjectURL(url);
        }
      }, 'image/jpeg', 0.95);
    } catch (err) {
      console.error('Image export error:', err);
    }
    setShowExportMenu(false);
  };

    return (
    <div className={cn("min-h-screen bg-gray-50", dmSans.className)}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Tools</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-3">{title}</h1>
          <p className="text-lg text-gray-600">{description}</p>
        </div>

        {/* Main Grid - Fixed 2 columns, no responsive breakpoints */}
        <div className="grid grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="flex flex-col">
            {/* Header - Fixed height container */}
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-900 border border-orange-200">
                  INPUT
                </span>
                <h2 className="text-xl font-medium text-gray-900">{inputLabel}</h2>
              </div>
              <p className="text-sm text-gray-600">
                Upload any image containing mathematical expressions
              </p>
            </div>

            {/* Drop Zone - Fixed dimensions */}
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`relative border-2 border-dashed rounded-xl p-16 text-center transition-all h-[520px] w-full flex flex-col items-center justify-center ${
                isDragging
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 bg-white hover:border-gray-400'
              } ${isProcessing ? 'opacity-50 pointer-events-none' : ''}`}
            >
                                   {imageData ? (
                       <div className="relative w-full h-full flex items-center justify-center">
                         {isTableFile ? (
                           <div className="text-center">
                             <div className="mb-4 flex justify-center">
                               <div className="bg-blue-50 rounded-full p-6">
                                 <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                 </svg>
                               </div>
                             </div>
                             <p className="text-lg font-medium text-gray-900 mb-1">{uploadedFileName}</p>
                             <p className="text-sm text-gray-500">File uploaded successfully</p>
                           </div>
                         ) : (
                           <>
                             {/* eslint-disable-next-line @next/next/no-img-element */}
                             <img
                               src={imageData}
                               alt="Uploaded"
                               className="max-w-full max-h-full object-contain rounded-lg relative z-10"
                             />
                           </>
                         )}
                       </div>
                     ) : (
                <>
                  {isProcessing ? (
                    <Loader2 className="h-16 w-16 text-blue-500 animate-spin mb-4" />
                  ) : (
                    <Upload className="h-16 w-16 text-gray-400 mb-4" />
                  )}
                  <p className="text-base text-gray-900 font-normal mb-2">
                    {isProcessing ? 'Processing...' : 'Drop your file here'}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    or{' '}
                    <label className="text-blue-600 hover:text-blue-500 cursor-pointer font-medium">
                      browse files
                      <input
                        type="file"
                        className="hidden"
                        accept={getAcceptAttribute()}
                        onChange={handleFileInput}
                        disabled={isProcessing}
                      />
                    </label>
                  </p>
                  <div className="inline-block bg-gray-100 rounded-full px-4 py-1.5 text-xs font-medium text-gray-700">
                    {acceptedFormats}
                  </div>
                </>
              )}
            </div>

            {error && (
              <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-4">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}
          </div>

          {/* Output Section */}
          <div className="flex flex-col">
            {/* Header - Fixed height container matching input */}
            <div className="h-[72px] mb-6 flex flex-col justify-start">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-green-50 px-3 py-1.5 text-sm font-medium text-green-900 border border-green-200">
                  OUTPUT
                </span>
                <h2 className="text-xl font-medium text-gray-900">{outputLabel}</h2>
              </div>
              <p className="text-sm text-gray-600">
                Ready to copy into any LaTeX editor
              </p>
            </div>

            {/* Main box - Fixed dimensions matching input */}
            <div className="bg-white border border-gray-200 rounded-xl h-[520px] w-full flex flex-col overflow-hidden">
              {/* Tabs inside the box */}
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
                    onClick={() => setActiveTab('preview')}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'preview'
                        ? 'border-blue-600 text-gray-900 bg-blue-50'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Eye className="h-4 w-4" />
                    Preview
                  </button>
                </div>
              </div>

              {/* Output Content */}
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
                    <p className="text-gray-400">Output will appear here...</p>
                  </div>
                )}
              </div>
            </div>

                               {/* Action Buttons */}
                   {latexCode && !isProcessing && (
                     <div className="mt-6 flex gap-3">
                       <button
                         onClick={() => openInOctree({ latex: latexCode, title: title, source: 'tools:ai' })}
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
                             <button
                               onClick={exportAsImage}
                               className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                             >
                               Export as Image
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