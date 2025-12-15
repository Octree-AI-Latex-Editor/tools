import type { Metadata } from "next";
import { getDictionary, hasLocale, defaultLocale } from '../../dictionaries';

type LayoutParams = {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);

  return {
    title: `${dict.toolsSpecific.imageToLatex.title} - Free Online Converter`,
    description: dict.toolsSpecific.imageToLatex.description,
    alternates: {
      canonical: `/${lang}/tools/math-to-latex`,
    },
  };
}

export default async function MathToLatexLayout({
  children,
  params,
}: LayoutParams) {
  return <>{children}</>;
}
