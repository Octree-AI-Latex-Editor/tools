import { MetadataRoute } from 'next'
import { templates as templateList } from '@/lib/templates'
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tools.useoctree.com'
  
  // All tool routes
  const tools = [
    'ai-latex-generator',
    'citation-generator',
    'equation-to-latex',
    'html-to-latex',
    'image-to-tikz',
    'latex-preview',
    'latex-to-markdown',
    'latex-word-counter',
    'markdown-to-latex',
    'math-to-latex',
    'mathml-to-latex',
    'mermaid-to-latex',
    'pdf-to-latex',
    'pgfplots-generator',
    'table-to-latex',
    'tikz-generator',
    'arxiv-to-latex',
  ]

  // All symbol category routes
  const symbols = [
    'math',
    'greek',
    'arrows',
    'latin',
    'set-theory',
    'logic',
    'linear-algebra',
    'calculus',
    'probability',
    'computer-science',
    'number-theory',
    'physics',
    'chemistry',
    'finance',
    'brackets',
    'accents',
    'geometry',
    'topology',
    'machine-learning',
    'relations',
    'operators',
    'summation',
    'functions',
    'order',
    'boolean',
    'optimization',
    'units',
    'quantifiers',
    'graph-theory',
    'combinatorics',
    'special-functions',
    'complex',
    'trigonometry',
    'differential-geometry',
    'tensors',
    'modal-logic',
    'game-theory',
  ]

  // Get all template slugs from shared source
  const templates = templateList.map(t => t.slug)

  // Helper to generate URL for a given path and locale
  const getLocalizedUrl = (path: string, locale: string) => {
    if (locale === DEFAULT_LOCALE) {
      return `${baseUrl}${path}`
    }
    return `${baseUrl}/${locale}${path}`
  }

  // Helper to generate alternates for all locales
  const getAlternates = (path: string) => ({
    languages: Object.fromEntries(
      LOCALES.map(locale => [
        locale,
        getLocalizedUrl(path, locale)
      ])
    )
  })

  // Generate URLs for all locales for a given path
  const generateLocalizedUrls = (
    path: string,
    changeFrequency: 'daily' | 'weekly' | 'monthly',
    priority: number
  ): MetadataRoute.Sitemap => {
    return LOCALES.map(locale => ({
      url: getLocalizedUrl(path, locale),
      lastModified: new Date(),
      changeFrequency,
      priority: locale === DEFAULT_LOCALE ? priority : priority - 0.1,
      alternates: getAlternates(path),
    }))
  }

  // Generate all URLs
  const homeUrls = generateLocalizedUrls('', 'daily', 1)
  const templatesIndexUrls = generateLocalizedUrls('/templates', 'weekly', 0.9)
  const symbolsIndexUrls = generateLocalizedUrls('/symbols', 'weekly', 0.9)

  const toolUrls = tools.flatMap(tool => 
    generateLocalizedUrls(`/tools/${tool}`, 'weekly', 0.8)
  )

  const symbolUrls = symbols.flatMap(symbol => 
    generateLocalizedUrls(`/symbols/${symbol}`, 'monthly', 0.7)
  )

  const templateUrls = templates.flatMap(template => 
    generateLocalizedUrls(`/templates/${template}`, 'monthly', 0.7)
  )

  return [
    ...homeUrls,
    ...templatesIndexUrls,
    ...symbolsIndexUrls,
    ...toolUrls,
    ...symbolUrls,
    ...templateUrls,
  ]
}
