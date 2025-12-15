import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import AIToolLayout from '@/components/AIToolLayout';

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function PdfToLatex({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <AIToolLayout
      title="PDF to LaTeX Converter"
      description="Convert PDF documents with math and equations to clean LaTeX code"
      apiEndpoint="/api/convert"
      inputLabel="Your PDF Document"
      outputLabel={dict.tools.cleanLatexCode}
      acceptedFormats="PDF"
    />
  );
}
