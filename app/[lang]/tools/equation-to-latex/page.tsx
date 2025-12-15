import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../dictionaries';
import EquationToLatexClient from "./client";

type PageParams = {
  params: Promise<{ lang: string }>;
};

export default async function EquationToLatexPage({ params }: PageParams) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <EquationToLatexClient dict={dict} lang={lang} />;
}
