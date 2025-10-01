import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert Table to LaTeX Online Free - CSV, JSON, Excel to LaTeX Converter",
  description: "Free AI-powered tool to convert tables from CSV, JSON, and Excel files to LaTeX code. Upload your table files and get clean LaTeX table output with PDF preview. Convert tables to LaTeX instantly.",
  keywords: [
    "convert table to LaTeX",
    "CSV to LaTeX converter",
    "JSON to LaTeX converter",
    "Excel to LaTeX converter",
    "table to LaTeX online",
    "free table to LaTeX converter",
    "CSV to LaTeX table",
    "Excel to LaTeX table",
  ],
  openGraph: {
    title: "Convert Table to LaTeX - Free Online Converter",
    description: "AI-powered converter for CSV, JSON, and Excel tables to LaTeX code with instant preview",
    type: "website",
  },
};

export default function TableToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 