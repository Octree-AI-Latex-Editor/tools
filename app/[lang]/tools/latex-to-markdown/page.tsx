import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import UlatexUtoUmarkdownClient from './page-client';

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function UlatexUtoUmarkdownPage({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <UlatexUtoUmarkdownClient dict={dict} lang={lang} />;
}
