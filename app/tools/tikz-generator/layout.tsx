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
  ],
  openGraph: {
    title: "TikZ Diagram Generator - AI-Powered LaTeX Graphics",
    description: "Generate TikZ diagrams using AI - describe your diagram and get LaTeX code instantly",
    type: "website",
  },
};

export default function TikzGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 