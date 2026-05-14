import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Technology Abreast Limited',
  description: 'Managed ICT Services, Strategic Consultancy & Digital Transformation — Nairobi, Kenya.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  )
}
