import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import TikzGeneratorClient from './page-client';

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function TikzGeneratorPage({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <TikzGeneratorClient dict={dict} lang={lang} />;
}
