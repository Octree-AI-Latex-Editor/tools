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
import { siteConfig } from "@/lib/site-config";

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
    metadataBase: new URL(siteConfig.websiteUrl || 'https://example.com'),
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
      url: siteConfig.websiteUrl,
      siteName: siteConfig.name,
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
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.websiteUrl,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.websiteUrl,
    },
  };

  return (
    <html lang={locale}>
      <body className={satoshi.className}>
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
