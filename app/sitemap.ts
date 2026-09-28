import type { MetadataRoute } from 'next'
import { services } from '@/lib/content'
import { articles } from '@/lib/insights'
import { siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages: { path: string; priority: number; freq: 'weekly' | 'monthly' }[] = [
    { path: '', priority: 1, freq: 'weekly' },
    { path: '/digital-government', priority: 0.9, freq: 'monthly' },
    { path: '/services', priority: 0.9, freq: 'monthly' },
    { path: '/about', priority: 0.8, freq: 'monthly' },
    { path: '/industries', priority: 0.8, freq: 'monthly' },
    { path: '/insights', priority: 0.8, freq: 'weekly' },
    { path: '/contact', priority: 0.7, freq: 'monthly' },
  ]
  return [
    ...pages.map((p) => ({
      url: `${siteUrl}${p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: `${siteUrl}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: s.featured ? 0.8 : 0.6,
    })),
    ...articles.map((a) => ({
      url: `${siteUrl}/insights/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
