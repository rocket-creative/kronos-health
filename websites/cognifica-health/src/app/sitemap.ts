import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://cognifica.health'
  const routes = [
    '',
    '/team',
    '/conditions-we-treat',
    '/brain-health-and-wellness',
    '/consults',
    '/news',
    '/tms-therapy',
    '/memory-brain-fog',
    '/concussion-tbi',
    '/neuropsychological-testing',
  ]
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
