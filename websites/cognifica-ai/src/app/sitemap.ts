import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://cognificaai.com', lastModified: new Date(), priority: 1 },
    { url: 'https://cognificaai.com/privacy', lastModified: new Date(), priority: 0.3 },
  ]
}
