import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Preview - Live Online LaTeX Editor with PDF Preview | Free Tool",
  description: "Free online LaTeX editor with instant PDF preview. Write LaTeX code and see the compiled output in real-time. Perfect for testing LaTeX documents and learning LaTeX.",
  keywords: [
    "LaTeX preview",
    "online LaTeX editor",
    "LaTeX live preview",
    "LaTeX compiler online",
    "free LaTeX editor",
    "LaTeX PDF preview",
    "LaTeX online",
    "real-time LaTeX compiler",
    "LaTeX playground",
  ],
  alternates: {
    canonical: '/tools/latex-preview',
  },
  openGraph: {
    title: "LaTeX Preview - Live Online LaTeX Editor",
    description: "Free LaTeX editor with instant PDF preview - write and compile LaTeX in real-time",
    url: 'https://tools.useoctree.com/tools/latex-preview',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "LaTeX Preview - Live Online LaTeX Editor",
    description: "Free LaTeX editor with instant PDF preview - write and compile LaTeX in real-time",
  },
};

export default function LatexPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 