import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import UlatexUpreviewClient from './page-client';

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function UlatexUpreviewPage({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <UlatexUpreviewClient dict={dict} lang={lang} />;
}
