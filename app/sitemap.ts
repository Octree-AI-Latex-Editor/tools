import { MetadataRoute } from 'next'
import { templates as templateList } from '@/lib/templates'

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
    'markdown-to-latex',
    'math-to-latex',
    'mathml-to-latex',
    'mermaid-to-latex',
    'pdf-to-latex',
    'pgfplots-generator',
    'table-to-latex',
    'tikz-generator',
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

  const toolUrls = tools.map(tool => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const symbolUrls = symbols.map(symbol => ({
    url: `${baseUrl}/symbols/${symbol}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const templateUrls = templates.map(template => ({
    url: `${baseUrl}/templates/${template}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/symbols`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...toolUrls,
    ...symbolUrls,
    ...templateUrls,
  ]
}
