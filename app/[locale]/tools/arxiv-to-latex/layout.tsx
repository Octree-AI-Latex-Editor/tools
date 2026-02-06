import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "ArXiv to LaTeX - Import arXiv Papers into Octree",
  description: "Import arXiv papers directly into Octree. Download and edit LaTeX source files from arXiv papers with our free tool. Coming soon!",
  keywords: [
    "arxiv to latex",
    "arxiv latex source",
    "arxiv download latex",
    "arxiv paper source",
    "arxiv tex files",
    "import arxiv papers",
    "arxiv source code",
    "arxiv latex editor",
    "arxiv paper import",
    "arxiv octree",
  ],
  alternates: {
    canonical: '/tools/arxiv-to-latex',
  },
  openGraph: {
    title: "ArXiv to LaTeX - Import arXiv Papers",
    description: "Import arXiv papers directly into Octree for editing",
    url: 'https://tools.useoctree.com/tools/arxiv-to-latex',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "ArXiv to LaTeX - Import arXiv Papers",
    description: "Import arXiv papers directly into Octree for editing",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'arxiv-to-latex', defaultMetadata);
}

export default function ArxivToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
