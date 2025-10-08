import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Citation Generator - Free BibTeX Citation Maker | Generate Citations Online",
  description: "Free AI-powered LaTeX citation generator. Create BibTeX citations from DOIs, article details, or URLs. Generate formatted citations for books, articles, and papers instantly.",
  keywords: [
    "LaTeX citation generator",
    "BibTeX generator",
    "citation maker",
    "generate BibTeX",
    "DOI to BibTeX",
    "free citation generator",
    "academic citation generator",
    "bibliography generator",
    "reference generator",
    "BibTeX citation maker",
  ],
  alternates: {
    canonical: '/tools/citation-generator',
  },
  openGraph: {
    title: "LaTeX Citation Generator - Free BibTeX Maker",
    description: "AI-powered tool to generate BibTeX citations from DOIs, article details, or URLs",
    url: 'https://tools.useoctree.com/tools/citation-generator',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "LaTeX Citation Generator - Free BibTeX Maker",
    description: "AI-powered tool to generate BibTeX citations from DOIs, article details, or URLs",
  },
};

export default function CitationGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 