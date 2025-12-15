import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import UmathmlUtoUlatexClient from './page-client';

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function UmathmlUtoUlatexPage({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <UmathmlUtoUlatexClient dict={dict} lang={lang} />;
}
