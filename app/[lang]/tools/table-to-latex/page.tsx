import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import AIToolLayout from '@/components/AIToolLayout';

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function TableToLatex({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <AIToolLayout
      title={dict.toolsSpecific.tableToLatex.title}
      description={dict.toolsSpecific.tableToLatex.description}
      apiEndpoint="/api/convert-table"
      inputLabel={dict.toolsSpecific.tableToLatex.tableData}
      outputLabel={dict.toolsSpecific.tableToLatex.generatedLatexCode}
      acceptedFormats="CSV"
    />
  );
}
