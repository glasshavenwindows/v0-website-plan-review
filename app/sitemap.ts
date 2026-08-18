import type { MetadataRoute } from 'next'
import { serviceAreas } from '@/lib/service-areas'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.glasshavenwindows.com'
  const routes = ['', '/about', '/services', '/contact', '/service-areas', '/privacy-policy', '/terms']

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))

  const townEntries: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
    url: `${baseUrl}/service-areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticEntries, ...townEntries]
}
