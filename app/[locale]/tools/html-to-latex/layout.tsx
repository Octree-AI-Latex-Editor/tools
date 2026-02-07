import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "HTML to LaTeX Converter Online - Free, Fast & Accurate | Octree",
  description: "Convert HTML to LaTeX in seconds — tables, formatting & structure preserved. Paste any HTML and get clean, compilable LaTeX code. Free online with live PDF preview.",
  keywords: [
    "convert HTML to LaTeX",
    "HTML to LaTeX converter",
    "HTML to LaTeX online",
    "HTML markup to LaTeX",
    "HTML LaTeX converter",
    "free HTML to LaTeX converter",
    "AI HTML to LaTeX converter",
    "web to LaTeX converter",
    "webpage to latex",
    "html table to latex",
    "html math to latex",
    "website to latex",
    "copy html to latex",
    "pandoc html to latex",
    "html code to tex",
  ],
  alternates: {
    canonical: '/tools/html-to-latex',
  },
  openGraph: {
    title: "HTML to LaTeX Converter Online - Free, Fast & Accurate",
    description: "Convert HTML to LaTeX in seconds — tables, formatting & structure preserved. Free online with live PDF preview.",
    url: 'https://tools.useoctree.com/tools/html-to-latex',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "HTML to LaTeX Converter Online - Free, Fast & Accurate",
    description: "Convert HTML to LaTeX in seconds — tables, formatting & structure preserved. Free online with live PDF preview.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'html-to-latex', defaultMetadata);
}

export default function HtmlToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 