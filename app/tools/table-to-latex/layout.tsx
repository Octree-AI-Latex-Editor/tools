import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert Excel to LaTeX Online Free - CSV, JSON, Excel to LaTeX Converter",
  description: "Free AI-powered tool to convert Excel spreadsheets from CSV, JSON, and XLSX files to LaTeX code. Upload your Excel files and get clean LaTeX table output with PDF preview. Convert Excel to LaTeX instantly.",
  keywords: [
    "convert Excel to LaTeX",
    "CSV to LaTeX converter",
    "JSON to LaTeX converter",
    "Excel to LaTeX converter",
    "Excel to LaTeX online",
    "free Excel to LaTeX converter",
    "CSV to LaTeX table",
    "Excel to LaTeX table",
  ],
  openGraph: {
    title: "Convert Excel to LaTeX - Free Online Converter",
    description: "AI-powered converter for CSV, JSON, and Excel spreadsheets to LaTeX code with instant preview",
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