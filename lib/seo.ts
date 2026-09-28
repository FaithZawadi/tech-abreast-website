import type { Metadata } from 'next'
import { company, services } from './content'

// Public address of the site. Override with NEXT_PUBLIC_SITE_URL if it changes.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://tech-abreast.com').replace(/\/$/, '')

export const defaultDescription =
  'Technology Abreast is a Nairobi ICT consultancy delivering managed ICT services, ICT strategy, enterprise architecture, digital government, cybersecurity and business intelligence across Kenya and East Africa.'

export const keywords = [
  'ICT consultancy Kenya',
  'managed ICT services Nairobi',
  'IT outsourcing Kenya',
  'enterprise architecture',
  'government enterprise architecture framework',
  'digital government',
  'e-government consultancy',
  'TOGAF consultants',
  'interoperability framework',
  'ICT strategy and governance',
  'cybersecurity audit Kenya',
  'ISO 27001',
  'ITIL service desk',
  'disaster recovery Kenya',
  'business intelligence Kenya',
  'VoIP phone systems Nairobi',
  'Technology Abreast',
]

export const shareImage = { url: '/og.jpg', width: 1200, height: 630, alt: 'Technology Abreast — Digital Business Enablers' }

// Builds page metadata with a canonical URL and matching social-share tags.
export function pageMeta({
  title, description, path,
}: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    // Next.js replaces (not merges) these objects, so repeat the shared fields
    openGraph: {
      type: 'website',
      locale: 'en_KE',
      siteName: company.name,
      title: `${title} | ${company.short}`,
      description,
      url: path,
      images: [shareImage],
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${company.short}`, description, images: [shareImage.url] },
  }
}

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${siteUrl}/#organization`,
  name: company.name,
  alternateName: company.short,
  slogan: company.tagline,
  description: defaultDescription,
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  image: `${siteUrl}/og.jpg`,
  email: company.email,
  telephone: company.phoneIntl,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Birdi Complex, 1st Floor, Mombasa Road',
    addressLocality: 'Nairobi',
    postalCode: '00200',
    addressCountry: 'KE',
  },
  areaServed: [
    { '@type': 'Country', name: 'Kenya' },
    { '@type': 'Place', name: 'East Africa' },
  ],
  knowsAbout: [
    'Managed ICT services', 'ICT strategy', 'ICT governance', 'Enterprise architecture', 'TOGAF',
    'Digital government', 'Interoperability', 'Cybersecurity', 'ITIL', 'ISO 27001', 'Business intelligence',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'ICT services and solutions',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, url: `${siteUrl}/services/${s.slug}` },
    })),
  },
}

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: company.name,
  publisher: { '@id': `${siteUrl}/#organization` },
  inLanguage: 'en',
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${siteUrl}${it.path}`,
    })),
  }
}

export function serviceLd({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${siteUrl}${path}`,
    provider: { '@id': `${siteUrl}/#organization` },
    areaServed: [{ '@type': 'Country', name: 'Kenya' }, { '@type': 'Place', name: 'East Africa' }],
  }
}
