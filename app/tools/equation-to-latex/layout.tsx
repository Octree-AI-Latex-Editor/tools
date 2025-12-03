import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equation to LaTeX Converter - Convert Math to LaTeX | Free Online Tool",
  description: "Convert mathematical equations to LaTeX code instantly. Enter text descriptions or upload images of equations to generate clean LaTeX code. Free online equation converter with live preview.",
  keywords: [
    "equation to LaTeX",
    "math to LaTeX converter",
    "equation converter",
    "LaTeX equation generator",
    "math equation LaTeX",
    "convert equation to LaTeX",
    "image to LaTeX",
    "handwritten equation to LaTeX",
    "free LaTeX converter",
    "online equation converter",
  ],
  alternates: {
    canonical: '/tools/equation-to-latex',
  },
  openGraph: {
    title: "Equation to LaTeX Converter - Convert Math to LaTeX",
    description: "Convert mathematical equations to LaTeX code instantly from text or images",
    url: 'https://tools.useoctree.com/tools/equation-to-latex',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Equation to LaTeX Converter - Convert Math to LaTeX",
    description: "Convert mathematical equations to LaTeX code instantly from text or images",
  },
};

export default function EquationToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
