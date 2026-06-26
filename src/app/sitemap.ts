import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://echo-sentient-core.example.com',
      changeFrequency: 'weekly',
      priority: 1,
      lastModified: new Date(),
    },
  ]
}
