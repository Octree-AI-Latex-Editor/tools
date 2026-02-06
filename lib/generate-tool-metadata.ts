import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

/**
 * Maps tool URL slugs to their translation keys in messages files.
 * e.g., 'image-to-tikz' -> 'imageToTikz' (matches metadata.tools.imageToTikz in messages/*.json)
 */
const slugToTranslationKey: Record<string, string> = {
  'image-to-tikz': 'imageToTikz',
  'pdf-to-latex': 'pdfToLatex',
  'citation-generator': 'citationGenerator',
  'ai-latex-generator': 'aiLatexGenerator',
  'latex-to-markdown': 'latexToMarkdown',
  'pgfplots-generator': 'pgfplotsGenerator',
  'math-to-latex': 'mathToLatex',
  'markdown-to-latex': 'markdownToLatex',
  'tikz-generator': 'tikzGenerator',
  'latex-preview': 'latexPreview',
  'equation-to-latex': 'equationToLatex',
  'table-to-latex': 'tableToLatex',
  'html-to-latex': 'htmlToLatex',
  'mathml-to-latex': 'mathmlToLatex',
  'mermaid-to-latex': 'mermaidToLatex',
  'latex-word-counter': 'latexWordCounter',
  'arxiv-to-latex': 'arxivToLatex',
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
 * Generates locale-aware metadata for tool pages.
 * For English: uses the provided SEO-optimized default metadata.
 * For other locales: uses translated title/description from messages files
 * while preserving keywords and other metadata from the defaults.
 */
export async function generateToolMetadata(
  locale: string,
  toolSlug: string,
  defaultMetadata: Metadata
): Promise<Metadata> {
  // For English, use the carefully crafted SEO-optimized metadata as-is
  if (locale === 'en') {
    return defaultMetadata;
  }

  const translationKey = slugToTranslationKey[toolSlug];
  if (!translationKey) {
    return defaultMetadata;
  }

  try {
    const t = await getTranslations({ locale, namespace: 'metadata' });
    const title = t(`tools.${translationKey}.title`);
    const description = t(`tools.${translationKey}.description`);

    return {
      ...defaultMetadata,
      title,
      description,
      alternates: {
        canonical: `/${locale}/tools/${toolSlug}`,
      },
      openGraph: {
        ...(typeof defaultMetadata.openGraph === 'object' ? defaultMetadata.openGraph : {}),
        title,
        description,
        url: `https://tools.useoctree.com/${locale}/tools/${toolSlug}`,
        locale: localeToOgLocale[locale] || locale,
      },
      twitter: {
        ...(typeof defaultMetadata.twitter === 'object' ? defaultMetadata.twitter : {}),
        title,
        description,
      },
    };
  } catch {
    // Fallback to default metadata if translations fail
    return defaultMetadata;
  }
}
