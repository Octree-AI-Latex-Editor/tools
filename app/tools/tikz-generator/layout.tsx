import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikZ Diagram Generator - AI-Powered LaTeX Graphics | Free Online Tool",
  description: "Generate TikZ diagrams and graphics using AI. Describe your diagram in plain text and get clean TikZ LaTeX code instantly. Free online TikZ generator with PDF preview.",
  keywords: [
    "TikZ generator",
    "AI TikZ generator",
    "LaTeX diagram generator",
    "TikZ code generator",
    "generate TikZ diagrams",
    "LaTeX graphics generator",
    "free TikZ tool",
    "TikZ online",
    "PGF/TikZ generator",
    "LaTeX drawing tool",
  ],
  alternates: {
    canonical: '/tools/tikz-generator',
  },
  openGraph: {
    title: "TikZ Diagram Generator - AI-Powered LaTeX Graphics",
    description: "Generate TikZ diagrams using AI - describe your diagram and get LaTeX code instantly",
    url: 'https://tools.useoctree.com/tools/tikz-generator',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "TikZ Diagram Generator - AI-Powered LaTeX Graphics",
    description: "Generate TikZ diagrams using AI - describe your diagram and get LaTeX code instantly",
  },
};

export default function TikzGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 