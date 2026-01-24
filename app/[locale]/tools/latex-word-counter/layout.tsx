import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Word Counter - Count Words in LaTeX Documents | Free Tool",
  description: "Free online LaTeX word counter. Accurately count words in your LaTeX documents, excluding commands and markup. Get detailed statistics for text, headers, and captions.",
  keywords: [
    "LaTeX word counter",
    "count words LaTeX",
    "LaTeX word count",
    "word count LaTeX document",
    "texcount online",
    "LaTeX statistics",
    "count words in tex file",
    "LaTeX document length",
    "academic word count",
    "thesis word counter",
    "paper word count",
    "overleaf word count",
    "latex character count",
    "tex word counter",
  ],
  alternates: {
    canonical: '/tools/latex-word-counter',
  },
  openGraph: {
    title: "LaTeX Word Counter - Count Words in LaTeX Documents",
    description: "Free online tool to accurately count words in LaTeX documents, excluding commands and markup",
    url: 'https://tools.useoctree.com/tools/latex-word-counter',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "LaTeX Word Counter - Count Words in LaTeX Documents",
    description: "Free online tool to accurately count words in LaTeX documents, excluding commands and markup",
  },
};

export default function LatexWordCounterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

