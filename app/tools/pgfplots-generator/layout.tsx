import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pgfplots Generator - AI-Powered LaTeX Plots & Graphs | Free Online Tool",
  description: "Generate pgfplots graphs and charts using AI. Describe your plot in plain text and get clean pgfplots LaTeX code instantly. Free online pgfplots generator with PDF preview.",
  keywords: [
    "pgfplots generator",
    "AI pgfplots generator",
    "LaTeX plot generator",
    "pgfplots code generator",
    "generate pgfplots graphs",
    "LaTeX chart generator",
    "free pgfplots tool",
    "pgfplots online",
    "LaTeX graph tool",
    "scientific plot generator",
  ],
  alternates: {
    canonical: '/tools/pgfplots-generator',
  },
  openGraph: {
    title: "Pgfplots Generator - AI-Powered LaTeX Plots & Graphs",
    description: "Generate pgfplots graphs using AI - describe your plot and get LaTeX code instantly",
    url: 'https://tools.useoctree.com/tools/pgfplots-generator',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pgfplots Generator - AI-Powered LaTeX Plots & Graphs",
    description: "Generate pgfplots graphs using AI - describe your plot and get LaTeX code instantly",
  },
};

export default function PgfplotsGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

