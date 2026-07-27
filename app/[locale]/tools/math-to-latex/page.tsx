import AIToolLayout from '@/components/AIToolLayout';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getRequestLocale } from '@/lib/i18n/server';
import { getTranslations } from 'next-intl/server';

export default async function MathToLatex() {
  const locale = await getRequestLocale();
  const t = await getTranslations('toolsSpecific.mathToLatex');

  return (
    <div>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <LanguageSwitcher currentLocale={locale} />
      </div> */}
      <AIToolLayout
        title={t('title')}
        description={t('subtitle')}
        apiEndpoint="/api/convert"
        inputLabel={t('inputLabel')}
        outputLabel={t('outputLabel')}
        acceptedFormats="JPEG, PNG, PDF"
        toolHref="/tools/math-to-latex"
      />
    </div>
  );
} 