import type { MetadataRoute } from 'next'
import { company } from '@/lib/content'
import { defaultDescription } from '@/lib/seo'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.short,
    description: defaultDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#16150F',
    theme_color: '#16150F',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
