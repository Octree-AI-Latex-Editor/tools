import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "Free Online LaTeX Editor with Live PDF Preview | Overleaf Alternative",
  description: "Write LaTeX, see PDF instantly. Free online LaTeX editor with real-time compilation — no account needed. Test code, learn LaTeX, export PDFs. Best free Overleaf alternative.",
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
    "latex renderer",
    "render latex",
    "latex rendering",
    "overleaf alternative",
    "overleaf alternatives",
    "alternative to overleaf",
    "latex editor online free",
    "latex viewer",
    "latex to pdf",
    "latex pdf",
    "pdf latex",
    "compile latex online",
    "latex compiler free",
    "write latex online",
    "latex sandbox",
  ],
  alternates: {
    canonical: '/tools/latex-preview',
  },
  openGraph: {
    title: "Free Online LaTeX Editor with Live PDF Preview",
    description: "Write LaTeX, see PDF instantly. Real-time compilation, no account needed. Best free Overleaf alternative.",
    url: 'https://tools.useoctree.com/tools/latex-preview',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free Online LaTeX Editor with Live PDF Preview",
    description: "Write LaTeX, see PDF instantly. Real-time compilation, no account needed. Best free Overleaf alternative.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'latex-preview', defaultMetadata);
}

export default function LatexPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 