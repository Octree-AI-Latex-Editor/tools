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
    'pgfplots-generator',
    'table-to-latex',
    'tikz-generator',
  ]

  // All template routes
  const templates = [
    'research-paper',
    'beamer-presentation',
    'academic-cv',
    'mathematical-document',
    'lab-report',
    'book-chapter',
    'resume',
    'grading-rubric',
    'assignment',
    'worksheet',
  ]

  const toolUrls = tools.map(tool => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
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
    ...toolUrls,
    ...templateUrls,
  ]
}

