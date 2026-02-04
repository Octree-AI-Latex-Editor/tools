import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI LaTeX Generator - Write Papers, Equations & Documents with AI | Free",
  description: "Generate LaTeX code instantly with AI. Describe your document in plain English → get complete, compilable LaTeX. Research papers, equations, presentations & more. Free, no signup.",
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
    "latex tutorial",
    "how to write latex",
    "latex for beginners",
    "learn latex",
    "latex help",
    "latex document creator",
    "chatgpt latex",
    "ai latex",
    "latex assistant",
    "write latex with ai",
    "latex paper generator",
    "academic writing latex",
  ],
  alternates: {
    canonical: '/tools/ai-latex-generator',
  },
  openGraph: {
    title: "AI LaTeX Generator - Write Papers & Documents with AI",
    description: "Generate LaTeX code instantly with AI. Describe your document → get complete, compilable LaTeX. Free, no signup.",
    url: 'https://tools.useoctree.com/tools/ai-latex-generator',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI LaTeX Generator - Write Papers & Documents with AI",
    description: "Generate LaTeX code instantly with AI. Describe your document → get complete, compilable LaTeX. Free, no signup.",
  },
};

export default function AILatexGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 