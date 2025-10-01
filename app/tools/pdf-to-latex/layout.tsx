import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert PDF to LaTeX Online Free - PDF to LaTeX Converter",
  description: "Free AI-powered tool to convert PDF documents with mathematical equations and formulas to LaTeX code. Upload PDF files and get clean LaTeX output with PDF preview. Convert PDF to LaTeX instantly.",
  keywords: [
    "convert PDF to LaTeX",
    "PDF to LaTeX converter",
    "PDF to LaTeX online",
    "convert PDF document to LaTeX",
    "PDF LaTeX converter",
    "free PDF to LaTeX converter",
    "AI PDF to LaTeX converter",
  ],
  openGraph: {
    title: "Convert PDF to LaTeX - Free Online Converter",
    description: "AI-powered converter for PDF documents to LaTeX code with instant preview",
    type: "website",
  },
};

export default function PdfToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 