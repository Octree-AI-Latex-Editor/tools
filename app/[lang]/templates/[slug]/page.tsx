import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import TemplatePageClient from './page-client';

type PageParams = {
  params: Promise<{ lang: string; slug: string }>;
};

export default async function TemplatePage({ params }: PageParams) {
  const { lang, slug } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <TemplatePageClient dict={dict} lang={lang} slug={slug} />;
}

