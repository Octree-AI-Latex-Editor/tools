import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "Mermaid to TikZ/LaTeX Converter - Transform Diagrams Instantly | Free",
  description: "Convert Mermaid diagrams to TikZ LaTeX code in one click. Flowcharts, sequence diagrams, Gantt charts → professional LaTeX graphics. Free online tool with live preview.",
  keywords: [
    "convert Mermaid to LaTeX",
    "Mermaid to LaTeX converter",
    "Mermaid to LaTeX online",
    "Mermaid diagram to LaTeX",
    "Mermaid LaTeX converter",
    "free Mermaid to LaTeX converter",
    "AI Mermaid to LaTeX converter",
    "diagram to LaTeX",
    "mermaid to tikz",
    "flowchart to latex",
    "sequence diagram to latex",
    "gantt chart to latex",
    "state diagram to latex",
    "class diagram to latex",
    "mermaid js to tikz",
    "markdown diagram to latex",
  ],
  alternates: {
    canonical: '/tools/mermaid-to-latex',
  },
  openGraph: {
    title: "Mermaid to TikZ/LaTeX Converter - Transform Diagrams Instantly",
    description: "Convert Mermaid diagrams to TikZ LaTeX code in one click. Flowcharts, sequence diagrams → professional LaTeX graphics.",
    url: 'https://tools.useoctree.com/tools/mermaid-to-latex',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mermaid to TikZ/LaTeX Converter - Transform Diagrams Instantly",
    description: "Convert Mermaid diagrams to TikZ LaTeX code in one click. Flowcharts, sequence diagrams → professional LaTeX graphics.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'mermaid-to-latex', defaultMetadata);
}

export default function MermaidToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 