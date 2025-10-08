import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free LaTeX Templates - Research Papers, Presentations & More | Octree Tools",
  description: "Free professional LaTeX templates for research papers, presentations, CVs, mathematical documents, and more. Download ready-to-use LaTeX code with PDF previews. Perfect for academics and students.",
  keywords: [
    "LaTeX templates",
    "free LaTeX templates",
    "research paper template LaTeX",
    "LaTeX presentation template",
    "academic CV template LaTeX",
    "LaTeX document templates",
    "IEEE LaTeX template",
    "Beamer presentation template",
    "mathematical document template",
    "LaTeX resume template",
    "academic templates LaTeX",
  ],
  alternates: {
    canonical: '/templates',
  },
  openGraph: {
    title: "Free LaTeX Templates - Research Papers, Presentations & More",
    description: "Professional LaTeX templates for research papers, presentations, CVs, and mathematical documents. Free download with PDF previews.",
    url: 'https://tools.useoctree.com/templates',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free LaTeX Templates - Research Papers, Presentations & More",
    description: "Professional LaTeX templates for research papers, presentations, CVs, and mathematical documents. Free download with PDF previews.",
  },
};

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

