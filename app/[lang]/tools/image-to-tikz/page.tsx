import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import UimageUtoUtikzClient from './page-client';

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function UimageUtoUtikzPage({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <UimageUtoUtikzClient dict={dict} lang={lang} />;
}
