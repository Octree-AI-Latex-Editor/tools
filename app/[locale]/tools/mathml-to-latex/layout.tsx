import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MathML to LaTeX Converter Online - Free & Instant | Octree",
  description: "Paste MathML, get perfect LaTeX in one click. Convert Word equations, MathType & Office Math to LaTeX instantly. Free online tool with live preview — no signup needed.",
  keywords: [
    "convert MathML to LaTeX",
    "MathML to LaTeX converter",
    "MathML to LaTeX online",
    "Mathematical Markup Language to LaTeX",
    "MathML LaTeX converter",
    "free MathML to LaTeX converter",
    "AI MathML to LaTeX converter",
    "MathML parser",
    "mathml to tex",
    "word equation to latex",
    "microsoft equation to latex",
    "office math to latex",
    "omml to latex",
    "mathtype to latex",
    "xml math to latex",
  ],
  alternates: {
    canonical: '/tools/mathml-to-latex',
  },
  openGraph: {
    title: "MathML to LaTeX Converter Online - Free & Instant",
    description: "Paste MathML, get perfect LaTeX in one click. Convert Word equations & MathType to LaTeX instantly.",
    url: 'https://tools.useoctree.com/tools/mathml-to-latex',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "MathML to LaTeX Converter Online - Free & Instant",
    description: "Paste MathML, get perfect LaTeX in one click. Convert Word equations & MathType to LaTeX instantly.",
  },
};

export default function MathMLToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 