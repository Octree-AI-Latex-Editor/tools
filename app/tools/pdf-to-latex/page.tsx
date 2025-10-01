'use client';

import AIToolLayout from '@/components/AIToolLayout';

export default function PdfToLatex() {
  return (
    <AIToolLayout
      title="PDF to LaTeX Converter"
      description="Convert PDF documents with math and equations to clean LaTeX code"
      apiEndpoint="/api/convert"
      inputLabel="Your PDF Document"
      outputLabel="Clean LaTeX Code"
      acceptedFormats="PDF"
    />
  );
} 