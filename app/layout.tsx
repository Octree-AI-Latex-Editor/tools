import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convert Image & PDF to LaTeX - Free Online Math Equation Converter | Octree Tools",
  description: "Free online tools to convert images and PDFs to LaTeX code. Convert handwritten math equations, formulas, and PDF documents to LaTeX format instantly. AI-powered LaTeX converter with PDF preview.",
  keywords: [
    "convert handwritten math to LaTeX",
    "math equation to LaTeX converter",
    "convert math to LaTeX",
    "LaTeX math converter",
    "math formula to LaTeX",
    "convert math equation to LaTeX online",
    "handwritten equation to LaTeX",
    "math text to LaTeX converter",
    "free LaTeX converter",
    "online math to LaTeX",
  ],
  openGraph: {
    title: "Convert Handwritten Math to LaTeX - Free Online Tool",
    description: "AI-powered tool to convert handwritten math equations and formulas to LaTeX code with instant PDF preview",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
