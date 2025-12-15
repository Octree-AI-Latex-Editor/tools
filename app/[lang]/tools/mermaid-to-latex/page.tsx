import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import UmermaidUtoUlatexClient from './page-client';

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function UmermaidUtoUlatexPage({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <UmermaidUtoUlatexClient dict={dict} lang={lang} />;
}
