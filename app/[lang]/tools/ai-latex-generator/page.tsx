import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import AILatexGeneratorClient from './page-client';

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function AILatexGenerator({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <AILatexGeneratorClient dict={dict} lang={lang} />;
}
