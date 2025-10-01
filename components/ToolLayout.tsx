'use client';

import { useState, useCallback } from 'react';
import { Upload } from 'lucide-react';

interface ToolLayoutProps {
  title: string;
  description: string;
  onConvert: (input: string) => string;
  inputPlaceholder?: string;
  acceptImage?: boolean;
}

export default function ToolLayout({
  title,
  description,
  onConvert,
  inputPlaceholder = "Enter your input...",
  acceptImage = false,
}: ToolLayoutProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [hasConverted, setHasConverted] = useState(false);

  const handleConvert = () => {
    const result = onConvert(input);
    setOutput(result);
    setHasConverted(true);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target?.result as string;
        setInput(imageData);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target?.result as string;
        setInput(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-500 mt-2">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input
            </label>
            {acceptImage && (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`mb-4 border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragging
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Drag and drop an image here, or{' '}
                  <label className="text-blue-600 hover:text-blue-500 cursor-pointer">
                    browse
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileInput}
                    />
                  </label>
                </p>
              </div>
            )}
            {input.startsWith('data:image') ? (
              <img src={input} alt="Input" className="w-full rounded-lg border border-gray-300" />
            ) : (
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                placeholder={inputPlaceholder}
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Output
            </label>
            <textarea
              value={output}
              className="w-full h-64 p-4 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
              placeholder="Output will appear here..."
              readOnly
            />
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={handleConvert}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Convert
          </button>
          
          {hasConverted && output && (
            <a
              href="https://useoctree.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Open in Octree
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 