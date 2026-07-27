'use client';

import AIToolLayout from '@/components/AIToolLayout';
import { useTranslations } from 'next-intl';

export default function TableToLatex() {
  const t = useTranslations('toolsSpecific.tableToLatex');
  
  return (
    <AIToolLayout
      title={t('title')}
      description={t('subtitle')}
      apiEndpoint="/api/convert-table"
      inputLabel={t('inputLabel')}
      outputLabel={t('outputLabel')}
      acceptedFormats="CSV"
      toolHref="/tools/table-to-latex"
    />
  );
} 