import { cookies, headers } from 'next/headers';
import { LOCALES, DEFAULT_LOCALE, LANG_COOKIE, normalizeLocale, type Locale } from './config';

/**
 * Get the request locale from cookie or Accept-Language header
 * Priority: cookie (octree_lang) → Accept-Language → default (en)
 */
export async function getRequestLocale(): Promise<Locale> {
  // Try cookie first
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LANG_COOKIE)?.value;
  
  if (cookieLocale) {
    return normalizeLocale(cookieLocale);
  }

  // Fall back to Accept-Language header
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');
  
  if (acceptLanguage) {
    // Simple parsing: split by comma, take first, extract base tag (e.g., "en" from "en-US")
    const languages = acceptLanguage.split(',').map(lang => {
      const parts = lang.trim().split(';');
      const baseTag = parts[0].trim().toLowerCase().split('-')[0];
      return baseTag;
    });

    // Find first matching supported locale
    for (const lang of languages) {
      if (normalizeLocale(lang) !== DEFAULT_LOCALE || LOCALES.includes(lang as Locale)) {
        return normalizeLocale(lang);
      }
    }
  }

  return DEFAULT_LOCALE;
}

/**
 * Load messages for a given locale
 */
export async function getMessages(locale: Locale) {
  try {
    const messages = await import(`../../messages/${locale}.json`);
    return messages.default;
  } catch {
    // Fallback to English if locale file doesn't exist
    const fallback = await import(`../../messages/${DEFAULT_LOCALE}.json`);
    return fallback.default;
  }
}
