import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Word Counter - Count Words in PDF Online Free",
  description: "Free tool to count the exact number of words in PDF documents. Upload a PDF and get instant word count, character count, and page count statistics.",
  keywords: [
    "word counter",
    "PDF word counter",
    "LaTeX word counter",
    "count words in PDF",
    "PDF word count",
    "free word counter",
    "document word count",
  ],
  alternates: {
    canonical: '/tools/latex-word-counter',
  },
  openGraph: {
    title: "LaTeX Word Counter - Count Words in PDF",
    description: "Free tool to count words in PDF documents instantly",
    url: 'https://tools.useoctree.com/tools/latex-word-counter',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "LaTeX Word Counter - Count Words in PDF",
    description: "Free tool to count words in PDF documents instantly",
  },
};

export default function LatexWordCounterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


