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
  ],
  openGraph: {
    title: "LaTeX Citation Generator - Free BibTeX Maker",
    description: "AI-powered tool to generate BibTeX citations from DOIs, article details, or URLs",
    type: "website",
  },
};

export default function CitationGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 