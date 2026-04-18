import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/articles'

const BASE = 'https://eagletekvisions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const articles = getAllArticles()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                   lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/services`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contact`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/pricing`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/about`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/EV/Articles`,  lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/faq`,          lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/privacy`,      lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${BASE}/terms`,        lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
  ]

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE}/EV/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...articlePages]
}
