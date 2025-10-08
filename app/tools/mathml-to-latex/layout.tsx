import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert MathML to LaTeX Online Free - MathML to LaTeX Converter",
  description: "Free AI-powered tool to convert MathML (Mathematical Markup Language) to LaTeX code. Paste your MathML markup and get clean LaTeX output with PDF preview. Convert MathML to LaTeX instantly.",
  keywords: [
    "convert MathML to LaTeX",
    "MathML to LaTeX converter",
    "MathML to LaTeX online",
    "Mathematical Markup Language to LaTeX",
    "MathML LaTeX converter",
    "free MathML to LaTeX converter",
    "AI MathML to LaTeX converter",
    "MathML parser",
  ],
  alternates: {
    canonical: '/tools/mathml-to-latex',
  },
  openGraph: {
    title: "Convert MathML to LaTeX - Free Online Converter",
    description: "AI-powered converter for MathML markup to LaTeX code with instant preview",
    url: 'https://tools.useoctree.com/tools/mathml-to-latex',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Convert MathML to LaTeX - Free Online Converter",
    description: "AI-powered converter for MathML markup to LaTeX code with instant preview",
  },
};

export default function MathMLToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 