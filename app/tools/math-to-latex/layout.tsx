import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert Handwritten Math to LaTeX Online Free - Math Equation to LaTeX Converter",
  description: "Free AI-powered tool to convert handwritten math equations, formulas, and expressions to LaTeX code. Upload image of math equations and get clean LaTeX output with PDF preview. Convert math text to LaTeX instantly.",
  keywords: [
    "convert handwritten math to LaTeX",
    "math equation to LaTeX converter",
    "convert math to LaTeX online",
    "math formula to LaTeX converter",
    "convert math equation to LaTeX",
    "LaTeX math converter online",
    "handwritten equation to LaTeX",
    "math text to LaTeX",
    "free math to LaTeX converter",
    "AI LaTeX converter",
    "image to LaTeX math",
    "photo to LaTeX",
  ],
  alternates: {
    canonical: '/tools/math-to-latex',
  },
  openGraph: {
    title: "Convert Handwritten Math to LaTeX - Free Online Converter",
    description: "AI-powered converter for handwritten math equations and formulas to LaTeX code with instant preview",
    url: 'https://tools.useoctree.com/tools/math-to-latex',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Convert Handwritten Math to LaTeX - Free Online Converter",
    description: "AI-powered converter for handwritten math equations and formulas to LaTeX code with instant preview",
  },
};

export default function MathToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 