import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Technology Abreast Limited | ICT Consultancy, Managed Services & Enterprise Architecture',
    template: '%s | Technology Abreast',
  },
  description:
    'Digital Business Enablers. Managed ICT services, strategic consultancy, enterprise architecture, digital government and cybersecurity — Nairobi, Kenya.',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
