import { notFound } from 'next/navigation';
import { hasLocale, locales } from './dictionaries';
import type { Metadata } from "next";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  
  return {
    title: "Free LaTeX Tools - Convert Image to LaTeX, 57 Templates, PDF Preview | Octree",
    description: "Free LaTeX tools: AI-powered math equation converter, 57 professional templates (resume, CV, thesis, beamer), live PDF preview. Convert handwritten math, images & PDFs to LaTeX instantly. Perfect for academics, students & researchers.",
    metadataBase: new URL('https://tools.useoctree.com'),
    alternates: {
      canonical: `/${lang}`,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  // This is a nested layout - it doesn't render html/body
  // The LocaleScript component will update the html attributes
  return <>{children}</>;
}
