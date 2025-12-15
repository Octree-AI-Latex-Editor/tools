import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Header from "@/components/Header";
import ClientBootstrap from "@/components/ClientBootstrap";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LocaleScript from "@/components/LocaleScript";

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
  metadataBase: new URL('https://tools.useoctree.com'),
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
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={satoshi.className} suppressHydrationWarning>
        <LocaleScript />
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
