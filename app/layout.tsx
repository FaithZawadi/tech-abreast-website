import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { company } from '@/lib/content'
import { defaultDescription, keywords, organizationLd, siteUrl, websiteLd } from '@/lib/seo'

// Self-hosted Poppins: no request to Google Fonts, no render-blocking CSS
const poppins = localFont({
  src: [
    { path: './fonts/poppins-300.woff2', weight: '300' },
    { path: './fonts/poppins-400.woff2', weight: '400' },
    { path: './fonts/poppins-500.woff2', weight: '500' },
    { path: './fonts/poppins-600.woff2', weight: '600' },
    { path: './fonts/poppins-700.woff2', weight: '700' },
    { path: './fonts/poppins-800.woff2', weight: '800' },
  ],
  display: 'swap',
  variable: '--font-poppins',
})

const title = 'Technology Abreast | ICT Consultancy, Managed Services & Enterprise Architecture'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: '%s | Technology Abreast' },
  description: defaultDescription,
  keywords,
  applicationName: company.name,
  authors: [{ name: company.name, url: siteUrl }],
  creator: company.name,
  publisher: company.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: '/',
    siteName: company.name,
    title,
    description: defaultDescription,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Technology Abreast — Digital Business Enablers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: defaultDescription,
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  formatDetection: { telephone: true, email: true, address: true },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: '#16150F',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <JsonLd data={[organizationLd, websiteLd]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
