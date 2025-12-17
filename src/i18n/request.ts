import {getRequestConfig} from 'next-intl/server';
import {cookies, headers} from 'next/headers';

const locales = ['en', 'fr', 'es', 'pt', 'cn', 'ar'] as const;
const defaultLocale = 'en';

// Simple locale detection from cookie or Accept-Language header
function getLocale(): string {
  // Try to get locale from cookie first
  const cookieStore = cookies();
  const cookieLocale = cookieStore.get('locale')?.value;
  
  if (cookieLocale && locales.includes(cookieLocale as any)) {
    return cookieLocale;
  }

  // Fall back to Accept-Language header
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language');
  
  if (acceptLanguage) {
    // Simple parsing: look for supported locales in Accept-Language
    for (const locale of locales) {
      if (acceptLanguage.toLowerCase().includes(locale.toLowerCase())) {
        return locale;
      }
    }
  }

  return defaultLocale;
}

export default getRequestConfig(async () => {
  const locale = getLocale();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
