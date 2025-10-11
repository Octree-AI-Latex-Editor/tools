'use client';

import AIToolLayout from '@/components/AIToolLayout';

export default function TableToLatex() {
  return (
    <AIToolLayout
      title="CSV to LaTeX Converter"
      description="Upload a .csv file and instantly get clean LaTeX table code."
      apiEndpoint="/api/convert-table"
      inputLabel="Upload CSV File"
      outputLabel="LaTeX Table Output"
      acceptedFormats="CSV"
    />
  );
} 