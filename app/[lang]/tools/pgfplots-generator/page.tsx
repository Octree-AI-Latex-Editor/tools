import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import UpgfplotsUgeneratorClient from './page-client';

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function UpgfplotsUgeneratorPage({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <UpgfplotsUgeneratorClient dict={dict} lang={lang} />;
}
