import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tools.useoctree.com'
  
  // All tool routes
  const tools = [
    'ai-latex-generator',
    'citation-generator',
    'html-to-latex',
    'latex-preview',
    'markdown-to-latex',
    'math-to-latex',
    'mathml-to-latex',
    'mermaid-to-latex',
    'pdf-to-latex',
    'table-to-latex',
    'tikz-generator',
  ]

  const toolUrls = tools.map(tool => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
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
    ...toolUrls,
  ]
}

