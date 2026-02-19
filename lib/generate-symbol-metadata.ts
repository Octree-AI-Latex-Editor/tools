import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { generateAlternates } from '@/lib/seo';

/**
 * Maps symbol URL slugs to their translation keys in messages files.
 * e.g., 'set-theory' -> 'setTheory' (matches metadata.symbols.setTheory in messages/*.json)
 */
const slugToTranslationKey: Record<string, string> = {
  'math': 'math',
  'greek': 'greek',
  'arrows': 'arrows',
  'brackets': 'brackets',
  'calculus': 'calculus',
  'set-theory': 'setTheory',
  'logic': 'logic',
  'relations': 'relations',
  'operators': 'operators',
  'linear-algebra': 'linearAlgebra',
  'geometry': 'geometry',
  'probability': 'probability',
  'physics': 'physics',
  'chemistry': 'chemistry',
  'computer-science': 'computerScience',
  'functions': 'functions',
  'number-theory': 'numberTheory',
  'accents': 'accents',
  'boolean': 'boolean',
  'summation': 'summation',
  'trigonometry': 'trigonometry',
  'topology': 'topology',
  'finance': 'finance',
  'machine-learning': 'machineLearning',
  'latin': 'latin',
  'complex': 'complex',
  'graph-theory': 'graphTheory',
  'combinatorics': 'combinatorics',
  'special-functions': 'specialFunctions',
  'tensors': 'tensors',
  'differential-geometry': 'differentialGeometry',
  'modal-logic': 'modalLogic',
  'game-theory': 'gameTheory',
  'order': 'order',
  'optimization': 'optimization',
  'quantifiers': 'quantifiers',
  'units': 'units',
};

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
  id: 'id_ID',
  ms: 'ms_MY',
  fil: 'fil_PH',
  ru: 'ru_RU',
  vi: 'vi_VN',
  nl: 'nl_NL',
};

/**
 * Generates locale-aware metadata for symbol pages.
 * For English: uses the provided SEO-optimized default metadata.
 * For other locales: uses translated title/description from messages files
 * while preserving keywords and other metadata from the defaults.
 */
export async function generateSymbolMetadata(
  locale: string,
  symbolSlug: string,
  defaultMetadata: Metadata
): Promise<Metadata> {
  const symbolPath = `/symbols/${symbolSlug}`;
  const alternates = generateAlternates(symbolPath, locale);

  // For English, use the carefully crafted SEO-optimized metadata as-is
  // but add canonical + hreflang
  if (locale === 'en') {
    return {
      ...defaultMetadata,
      alternates,
    };
  }

  const translationKey = slugToTranslationKey[symbolSlug];
  if (!translationKey) {
    return {
      ...defaultMetadata,
      alternates,
    };
  }

  try {
    const t = await getTranslations({ locale, namespace: 'metadata' });
    const title = t(`symbols.${translationKey}.title`);
    const description = t(`symbols.${translationKey}.description`);

    return {
      ...defaultMetadata,
      title,
      description,
      alternates,
      openGraph: {
        ...(typeof defaultMetadata.openGraph === 'object' ? defaultMetadata.openGraph : {}),
        title,
        description,
        locale: localeToOgLocale[locale] || locale,
      },
      twitter: defaultMetadata.twitter
        ? {
            ...(typeof defaultMetadata.twitter === 'object' ? defaultMetadata.twitter : {}),
            title,
            description,
          }
        : undefined,
    };
  } catch {
    // Fallback to default metadata if translations fail
    return {
      ...defaultMetadata,
      alternates,
    };
  }
}
