'use client';

import { useRouter } from 'next/navigation';
import { LOCALES, LANG_COOKIE, type Locale } from '@/lib/i18n/config';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

function setCookie(name: string, value: string, days: number = 365) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; path=/; max-age=${days * 24 * 60 * 60}; samesite=lax`;
}

// Language names in their native form (not translated)
const LANGUAGE_NAMES: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  pt: 'Português',
  cn: '中文',
  ar: 'العربية',
  de: 'Deutsch',
  ja: '日本語',
  it: 'Italiano',
  ko: '한국어',
};

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    setCookie(LANG_COOKIE, newLocale, 365);
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="language-select" className="text-sm text-gray-600">
        Language:
      </label>
      <select
        id="language-select"
        value={currentLocale}
        onChange={handleLanguageChange}
        className="px-3 py-1.5 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {LOCALES.map((locale) => (
          <option key={locale} value={locale}>
            {LANGUAGE_NAMES[locale]}
          </option>
        ))}
      </select>
    </div>
  );
}
