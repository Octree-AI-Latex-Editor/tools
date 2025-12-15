import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import AIToolLayout from '@/components/AIToolLayout';

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function MathToLatex({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <AIToolLayout
      title={dict.toolsSpecific.imageToLatex.title}
      description={dict.toolsSpecific.imageToLatex.description}
      apiEndpoint="/api/convert"
      inputLabel={dict.tools.yourHandwrittenNotes}
      outputLabel={dict.tools.cleanLatexCode}
      acceptedFormats="JPEG, PNG, PDF"
    />
  );
}
