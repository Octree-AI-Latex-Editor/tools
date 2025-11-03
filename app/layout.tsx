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
  title: "Free LaTeX Tools - Convert Image to LaTeX, 57 Templates, PDF Preview | Octree",
  description: "Free LaTeX tools: AI-powered math equation converter, 57 professional templates (resume, CV, thesis, beamer), live PDF preview. Convert handwritten math, images & PDFs to LaTeX instantly. Perfect for academics, students & researchers.",
  keywords: [
    // Conversion tools - high intent
    "convert handwritten math to LaTeX",
    "image to LaTeX converter",
    "PDF to LaTeX converter",
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
    "photo to LaTeX",
    "picture to LaTeX equation",
    
    // Additional tools
    "LaTeX citation generator",
    "TikZ generator",
    "Markdown to LaTeX",
    "HTML to LaTeX",
    "MathML to LaTeX",
    "LaTeX live preview",
    "LaTeX online editor",
    "free LaTeX templates",
    "LaTeX resume template",
    "LaTeX CV template",
    "overleaf template",
    "LaTeX research paper template",
    "LaTeX thesis template",
    "LaTeX beamer template",
    "LaTeX presentation template",
    "LaTeX homework template",
    "LaTeX poster template",
    "LaTeX book template",
    "LaTeX report template",
    "LaTeX business plan template",
    "LaTeX memo template",
    "LaTeX manuscript template",
    "LaTeX recipe template",
    "LaTeX flyer template",
    "LaTeX business card template",
    "LaTeX calendar template",
    "LaTeX notes template",
    "LaTeX exam template",
    "LaTeX assignment template",
    "LaTeX letter template",
    "LaTeX cover letter template",
  ],
  metadataBase: new URL('https://tools.useoctree.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Free LaTeX Tools - Math Converter & 57 Templates",
    description: "AI-powered math equation converter + 57 free LaTeX templates (resume, CV, thesis, beamer). Convert handwritten math, images & PDFs to LaTeX instantly with live preview.",
    url: 'https://tools.useoctree.com',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free LaTeX Tools - Math Converter & 57 Templates",
    description: "AI-powered math equation converter + 57 free LaTeX templates (resume, CV, thesis, beamer). Convert handwritten math, images & PDFs to LaTeX instantly with live preview.",
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
    description: 'Free LaTeX tools: AI-powered converter for math equations, images & PDFs. 57 professional templates for resume, CV, thesis, beamer, homework, business reports. Live PDF preview.',
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
      'AI-powered handwritten math to LaTeX converter',
      'PDF to LaTeX converter',
      'Image to LaTeX converter',
      'Free LaTeX equation generator',
      '57 LaTeX templates: resume, CV, thesis, beamer presentation, homework, poster, business plan, business report, memo, manuscript, recipe book, flyer, business card, calendar, and more',
      'Live PDF preview and editor',
      'Free download with ready-to-use code',
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
