import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert Mermaid to LaTeX Online Free - Mermaid Diagram to LaTeX Converter",
  description: "Free AI-powered tool to convert Mermaid diagrams to LaTeX code. Paste your Mermaid syntax and get clean LaTeX output with PDF preview. Convert Mermaid to LaTeX instantly.",
  keywords: [
    "convert Mermaid to LaTeX",
    "Mermaid to LaTeX converter",
    "Mermaid to LaTeX online",
    "Mermaid diagram to LaTeX",
    "Mermaid LaTeX converter",
    "free Mermaid to LaTeX converter",
    "AI Mermaid to LaTeX converter",
    "diagram to LaTeX",
  ],
  alternates: {
    canonical: '/tools/mermaid-to-latex',
  },
  openGraph: {
    title: "Convert Mermaid to LaTeX - Free Online Converter",
    description: "AI-powered converter for Mermaid diagrams to LaTeX code with instant preview",
    url: 'https://tools.useoctree.com/tools/mermaid-to-latex',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Convert Mermaid to LaTeX - Free Online Converter",
    description: "AI-powered converter for Mermaid diagrams to LaTeX code with instant preview",
  },
};

export default function MermaidToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 