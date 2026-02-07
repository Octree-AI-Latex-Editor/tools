import { MetadataRoute } from 'next'
import { tools } from '@/lib/tools'
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n/config'
import { siteConfig } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.websiteUrl || 'https://example.com'

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

  // Generate home URLs
  const homeUrls = generateLocalizedUrls('', 'daily', 1)

  // Generate tool URLs dynamically from the tools registry
  const toolUrls = tools.flatMap(tool => {
    const href = tool.href.startsWith('/') ? tool.href : `/${tool.href}`;
    return generateLocalizedUrls(href, 'weekly', 0.8);
  })

  return [
    ...homeUrls,
    ...toolUrls,
  ]
}
