import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Header from "@/components/Header";
import ClientBootstrap from "@/components/ClientBootstrap";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Variable.woff2',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Convert Image & PDF to LaTeX - Free Online Math Equation Converter | Octree Tools",
  description: "Free online tools and templates to convert images and PDFs to LaTeX code. 57 professional LaTeX templates for research papers, CVs, business reports, recipes, flyers, calendars. Convert handwritten math equations, formulas, and PDF documents to LaTeX format instantly. AI-powered LaTeX converter with PDF preview.",
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
    "AI LaTeX generator",
    "LaTeX citation generator",
    "TikZ generator",
    "Markdown to LaTeX",
    "HTML to LaTeX",
    "MathML to LaTeX",
    "free LaTeX templates",
    "LaTeX resume template",
    "LaTeX CV template",
    "LaTeX research paper template",
    "LaTeX business plan template",
    "LaTeX memo template",
    "LaTeX manuscript template",
    "LaTeX recipe template",
    "LaTeX flyer template",
    "LaTeX business card template",
    "LaTeX calendar template",
  ],
  metadataBase: new URL('https://tools.useoctree.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Convert Handwritten Math to LaTeX - Free Online Tool",
    description: "AI-powered tool to convert handwritten math equations and formulas to LaTeX code with instant PDF preview",
    url: 'https://tools.useoctree.com',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Convert Handwritten Math to LaTeX - Free Online Tool",
    description: "AI-powered tool to convert handwritten math equations and formulas to LaTeX code with instant PDF preview",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Octree LaTeX Tools',
    description: 'Free online tools to convert images and PDFs to LaTeX code. 57 professional LaTeX templates. AI-powered LaTeX converter with PDF preview.',
    url: 'https://tools.useoctree.com',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Octree',
      url: 'https://useoctree.com',
    },
    featureList: [
      'Math to LaTeX converter',
      'PDF to LaTeX converter',
      'Image to LaTeX converter',
      'AI LaTeX generator',
      '57 LaTeX templates (research papers, CVs, business reports, recipes, flyers, calendars)',
      'Live LaTeX preview',
      'Citation generator',
      'TikZ generator',
    ],
  };

  return (
    <html lang="en">
      <body className={satoshi.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientBootstrap />
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
