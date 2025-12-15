import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../dictionaries';
import TemplatesPageClient from './page-client';

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function TemplatesPage({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <TemplatesPageClient dict={dict} lang={lang} />;
}

