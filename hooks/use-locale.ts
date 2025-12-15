'use client';

import { useParams } from 'next/navigation';

const locales = ['en', 'fr', 'cn', 'es', 'pt', 'ar'] as const;
export type Locale = typeof locales[number];
const defaultLocale: Locale = 'en';

export function useLocale(): Locale {
  const params = useParams();
  const lang = params?.lang as string;
  
  // Validate locale or return default
  if (lang && locales.includes(lang as Locale)) {
    return lang as Locale;
  }
  
  return defaultLocale;
}

