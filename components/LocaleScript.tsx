'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const locales = ['en', 'fr', 'cn', 'es', 'pt', 'ar'];
const defaultLocale = 'en';

export default function LocaleScript() {
  const pathname = usePathname();

  useEffect(() => {
    // Extract locale from pathname (e.g., /en/... or /fr/...)
    let locale = defaultLocale;
    if (pathname) {
      const segments = pathname.split('/').filter(Boolean);
      const firstSegment = segments[0];
      if (firstSegment && locales.includes(firstSegment)) {
        locale = firstSegment;
      }
    }

    // Update the HTML lang attribute based on the current locale
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [pathname]);

  return null;
}
