import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert Markdown to LaTeX Online Free - Markdown to LaTeX Converter",
  description: "Free AI-powered tool to convert Markdown documents to LaTeX code. Convert Markdown formatting, tables, math equations, and text to clean LaTeX output with PDF preview. Convert Markdown to LaTeX instantly.",
  keywords: [
    "convert Markdown to LaTeX",
    "Markdown to LaTeX converter",
    "Markdown to LaTeX online",
    "convert Markdown document to LaTeX",
    "Markdown LaTeX converter",
    "free Markdown to LaTeX converter",
    "AI Markdown to LaTeX converter",
    "Markdown math to LaTeX",
  ],
  openGraph: {
    title: "Convert Markdown to LaTeX - Free Online Converter",
    description: "AI-powered converter for Markdown documents to LaTeX code with instant preview",
    type: "website",
  },
};

export default function MarkdownToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 