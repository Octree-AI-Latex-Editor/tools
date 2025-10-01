'use client';

import AIToolLayout from '@/components/AIToolLayout';

export default function TableToLatex() {
  return (
    <AIToolLayout
      title="Table to LaTeX Converter"
      description="Convert CSV, JSON, and Excel tables to clean LaTeX code"
      apiEndpoint="/api/convert-table"
      inputLabel="Your Table File"
      outputLabel="Clean LaTeX Code"
      acceptedFormats="CSV, JSON, XLSX"
    />
  );
} 