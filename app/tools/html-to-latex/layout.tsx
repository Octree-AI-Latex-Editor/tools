import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert HTML to LaTeX Online Free - HTML to LaTeX Converter",
  description: "Free AI-powered tool to convert HTML markup to LaTeX code. Paste your HTML and get clean LaTeX output with PDF preview. Convert HTML to LaTeX instantly.",
  keywords: [
    "convert HTML to LaTeX",
    "HTML to LaTeX converter",
    "HTML to LaTeX online",
    "HTML markup to LaTeX",
    "HTML LaTeX converter",
    "free HTML to LaTeX converter",
    "AI HTML to LaTeX converter",
    "web to LaTeX converter",
  ],
  alternates: {
    canonical: '/tools/html-to-latex',
  },
  openGraph: {
    title: "Convert HTML to LaTeX - Free Online Converter",
    description: "AI-powered converter for HTML markup to LaTeX code with instant preview",
    url: 'https://tools.useoctree.com/tools/html-to-latex',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Convert HTML to LaTeX - Free Online Converter",
    description: "AI-powered converter for HTML markup to LaTeX code with instant preview",
  },
};

export default function HtmlToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 