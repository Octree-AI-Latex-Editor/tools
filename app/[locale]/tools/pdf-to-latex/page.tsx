'use client';

import AIToolLayout from '@/components/AIToolLayout';
import { useTranslations } from 'next-intl';

export default function PdfToLatex() {
  const t = useTranslations('toolsSpecific.pdfToLatex');
  
  return (
    <AIToolLayout
      title={t('title')}
      description={t('subtitle')}
      apiEndpoint="/api/convert"
      inputLabel={t('inputLabel')}
      outputLabel={t('outputLabel')}
      acceptedFormats="PDF"
      toolHref="/tools/pdf-to-latex"
    />
  );
} 