import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import UhtmlUtoUlatexClient from './page-client';

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function UhtmlUtoUlatexPage({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <UhtmlUtoUlatexClient dict={dict} lang={lang} />;
}
