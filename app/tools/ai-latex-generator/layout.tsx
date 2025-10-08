import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI LaTeX Generator - Generate LaTeX Code from Text | Free Online Tool",
  description: "Free AI-powered LaTeX code generator. Describe what you need in plain text and get complete LaTeX documents instantly. Generate research papers, presentations, reports, and more with AI.",
  keywords: [
    "AI LaTeX generator",
    "generate LaTeX code",
    "LaTeX code generator",
    "AI LaTeX writer",
    "automatic LaTeX generation",
    "text to LaTeX",
    "LaTeX document generator",
    "free LaTeX generator",
    "GPT LaTeX generator",
    "AI academic paper generator",
  ],
  alternates: {
    canonical: '/tools/ai-latex-generator',
  },
  openGraph: {
    title: "AI LaTeX Generator - Generate LaTeX from Text",
    description: "AI-powered tool to generate complete LaTeX documents from text descriptions",
    url: 'https://tools.useoctree.com/tools/ai-latex-generator',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI LaTeX Generator - Generate LaTeX from Text",
    description: "AI-powered tool to generate complete LaTeX documents from text descriptions",
  },
};

export default function AILatexGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 