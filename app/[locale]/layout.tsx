import type { Metadata } from "next";
import localFont from 'next/font/local';
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientBootstrap from "@/components/ClientBootstrap";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const satoshi = localFont({
  src: [
    {
      path: '../fonts/Satoshi-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-satoshi',
});

const localeToOgLocale: Record<string, string> = {
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
  pt: 'pt_BR',
  cn: 'zh_CN',
  ar: 'ar_SA',
  de: 'de_DE',
  ja: 'ja_JP',
  it: 'it_IT',
  ko: 'ko_KR',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  const title = t('site.title');
  const description = t('site.description');
  const keywords = t('site.keywords');
  
  return {
    title,
    description,
    keywords: keywords.split(', '),
    metadataBase: new URL('https://tools.useoctree.com'),
    alternates: {
      canonical: locale === 'en' ? '/' : `/${locale}`,
      languages: {
        'en': '/',
        'es': '/es',
        'fr': '/fr',
        'pt': '/pt',
        'zh': '/cn',
        'ar': '/ar',
        'de': '/de',
        'ja': '/ja',
        'it': '/it',
        'ko': '/ko',
      },
    },
    openGraph: {
      title,
      description,
      url: 'https://tools.useoctree.com',
      siteName: 'Octree LaTeX Tools',
      locale: localeToOgLocale[locale] || 'en_US',
      type: "website",
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Ensure that the incoming locale is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Octree LaTeX Tools',
    description: 'Free LaTeX tools: AI-powered converter for math equations, images & PDFs. 60+ professional templates for resume, CV, thesis, beamer, homework, obituary, interactive flashcards. Live PDF preview.',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '312',
      bestRating: '5',
      worstRating: '1',
    },
    featureList: [
      'AI-powered handwritten math to LaTeX converter',
      'PDF to LaTeX converter',
      'Image to LaTeX converter',
      'Free LaTeX equation generator',
      '60+ LaTeX templates: resume, CV, thesis, beamer presentation, homework, poster, obituary, interactive flashcards, business plan, business report, memo, manuscript, and more',
      'Live PDF preview and editor',
      'Free download with ready-to-use code',
      'Citation generator',
      'TikZ generator',
    ],
  };

  return (
    <html lang={locale}>
      <body className={`${satoshi.variable} ${satoshi.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientBootstrap />
          <Header />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
