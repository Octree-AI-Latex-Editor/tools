'use client';

import { useState, useCallback } from 'react';
import { Upload, Code2, Eye, Loader2 } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('preview');

  const processImage = async (image: string) => {
    setIsProcessing(true);
    setError('');

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image, type: 'math' }),
      });

      if (!response.ok) throw new Error('Conversion failed');

      const data = await response.json();
      setLatexCode(data.latex || '');
    } catch (err) {
      setError('Failed to process image. Please try again.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && (file.type.startsWith('image/') || file.type === 'application/pdf')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = event.target?.result as string;
        setImageData(data);
        processImage(data);
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
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = event.target?.result as string;
        setImageData(data);
        processImage(data);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{title}</h1>
          <p className="text-lg text-gray-600">{description}</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800">
                INPUT
              </span>
              <h2 className="text-xl font-semibold text-gray-900">{inputLabel}</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Upload any image containing mathematical expressions
            </p>

            {/* Drop Zone */}
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                isDragging
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 bg-white hover:border-gray-400'
              } ${isProcessing ? 'opacity-50 pointer-events-none' : ''}`}
            >
              {imageData ? (
                <div className="relative">
                  <img
                    src={imageData}
                    alt="Uploaded"
                    className="max-w-full h-auto rounded-lg mx-auto"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-700 shadow">
                    {acceptedFormats}
                  </div>
                </div>
              ) : (
                <>
                  {isProcessing ? (
                    <Loader2 className="mx-auto h-16 w-16 text-blue-500 animate-spin" />
                  ) : (
                    <Upload className="mx-auto h-16 w-16 text-gray-400" />
                  )}
                  <p className="mt-4 text-base text-gray-700 font-medium">
                    {isProcessing ? 'Processing...' : 'Drop your image here'}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    or{' '}
                    <label className="text-blue-600 hover:text-blue-500 cursor-pointer font-medium">
                      browse files
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*,.pdf"
                        onChange={handleFileInput}
                        disabled={isProcessing}
                      />
                    </label>
                  </p>
                  <div className="mt-4 inline-block bg-gray-100 rounded-full px-4 py-1.5 text-xs font-medium text-gray-600">
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
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                OUTPUT
              </span>
              <h2 className="text-xl font-semibold text-gray-900">{outputLabel}</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Ready to copy into any LaTeX editor
            </p>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('code')}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
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
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'preview'
                      ? 'border-green-500 text-gray-900 bg-green-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Eye className="h-4 w-4" />
                  Preview
                </button>
              </div>
            </div>

            {/* Output Content */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 min-h-[400px]">
              {isProcessing ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Loader2 className="mx-auto h-12 w-12 text-blue-500 animate-spin mb-4" />
                    <p className="text-gray-600">Converting to LaTeX...</p>
                  </div>
                </div>
              ) : latexCode ? (
                activeTab === 'code' ? (
                  <pre className="font-mono text-sm text-gray-800 whitespace-pre-wrap">
                    {latexCode}
                  </pre>
                ) : (
                  <div className="text-center text-2xl text-gray-800">
                    <div dangerouslySetInnerHTML={{ __html: renderLatexPreview(latexCode) }} />
                  </div>
                )
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-400">Output will appear here...</p>
                </div>
              )}
            </div>

            {/* Action Button */}
            {latexCode && !isProcessing && (
              <div className="mt-6">
                <a
                  href="https://useoctree.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-base font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Open in Octree
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple LaTeX preview renderer (for display purposes)
function renderLatexPreview(latex: string): string {
  // Basic rendering - in production, use KaTeX or MathJax
  return latex
    .replace(/\\\[/g, '<div style="margin: 1rem 0;">')
    .replace(/\\\]/g, '</div>')
    .replace(/\\int_\{([^}]*)\}\^\{([^}]*)\}/g, '∫<sub>$1</sub><sup>$2</sup>')
    .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '($1)/($2)')
    .replace(/\\_/g, '_')
    .replace(/\\\'/g, "'");
} 