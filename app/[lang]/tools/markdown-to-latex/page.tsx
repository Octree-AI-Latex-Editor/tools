import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import UmarkdownUtoUlatexClient from './page-client';

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function UmarkdownUtoUlatexPage({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <UmarkdownUtoUlatexClient dict={dict} lang={lang} />;
}
