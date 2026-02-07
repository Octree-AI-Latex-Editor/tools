export const LOCALES = ['en', 'fr', 'es', 'pt', 'cn', 'ar', 'de', 'ja', 'it', 'ko', 'id', 'ms', 'fil', 'ru', 'vi', 'nl'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LANG_COOKIE = 'tools_lang';

export function isLocale(x: string): x is Locale {
  return LOCALES.includes(x as Locale);
}

export function normalizeLocale(x?: string | null): Locale {
  if (!x) return DEFAULT_LOCALE;
  return isLocale(x) ? x : DEFAULT_LOCALE;
}
