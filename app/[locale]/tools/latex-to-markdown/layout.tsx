import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "Convert LaTeX to Markdown Online Free - LaTeX to Markdown Converter",
  description: "Free AI-powered tool to convert LaTeX documents or snippets to clean Markdown. Preserves math ($ ... $ and $$ ... $$), tables, code blocks, lists, headers, and links.",
  keywords: [
    "convert LaTeX to Markdown",
    "LaTeX to Markdown converter",
    "latex2md",
    "LaTeX to MD",
    "free LaTeX to Markdown",
    "AI LaTeX to Markdown",
    "tex to markdown",
    "latex to github markdown",
    "latex to obsidian",
    "latex to notion",
    "latex to readme",
    "latex document to md",
    "latex paper to markdown",
    "pandoc latex to markdown",
  ],
  alternates: {
    canonical: '/tools/latex-to-markdown',
  },
  openGraph: {
    title: "Convert LaTeX to Markdown - Free Online Converter",
    description: "AI-powered converter for LaTeX to Markdown with math preserved",
    url: 'https://tools.useoctree.com/tools/latex-to-markdown',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Convert LaTeX to Markdown - Free Online Converter",
    description: "AI-powered converter for LaTeX to Markdown with math preserved",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'latex-to-markdown', defaultMetadata);
}

export default function LatexToMarkdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


