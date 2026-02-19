import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n/config';

/**
 * Generates the `alternates` metadata object with both canonical URL and
 * hreflang language alternates for all supported locales.
 *
 * This ensures every page has:
 * - A correct canonical tag (locale-prefixed for non-default locales)
 * - hreflang tags for all 16 locales + x-default
 *
 * @param path - The path without locale prefix, e.g. '/tools/tikz-generator' or '/templates'
 * @param locale - The current page locale
 */
export function generateAlternates(path: string, locale: string) {
  const languages: Record<string, string> = {};

  for (const loc of LOCALES) {
    if (loc === DEFAULT_LOCALE) {
      languages[loc] = path || '/';
    } else {
      languages[loc] = `/${loc}${path}`;
    }
  }

  // x-default points to the English (default locale) version
  languages['x-default'] = path || '/';

  return {
    canonical: locale === DEFAULT_LOCALE ? (path || '/') : `/${locale}${path}`,
    languages,
  };
}
