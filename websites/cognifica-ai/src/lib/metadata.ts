import type { Metadata } from 'next'

const BASE_URL = 'https://cognificaai.com'

export function buildMetadata(params: {
  title: string
  description: string
  path?: string
}): Metadata {
  const url = `${BASE_URL}${params.path ?? ''}`
  return {
    title: params.title,
    description: params.description,
    alternates: { canonical: url },
    openGraph: {
      title: params.title,
      description: params.description,
      url,
      siteName: 'CognificaAI',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: params.title,
      description: params.description,
    },
  }
}
