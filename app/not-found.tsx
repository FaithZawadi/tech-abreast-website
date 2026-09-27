import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

const links = [
  { href: '/services', label: 'Services & solutions' },
  { href: '/digital-government', label: 'Digital government' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact', label: 'Contact us' },
]

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink pb-20 pt-40">
      <div className="rays -left-72 top-0" />
      <div className="container-x relative">
        <span className="text-8xl font-extrabold text-wing">404</span>
        <h1 className="mt-4 text-4xl font-bold text-white">This page couldn’t be found.</h1>
        <p className="mt-4 max-w-xl text-white/70">
          The link may be old or mistyped. These pages are a good place to continue:
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Back to home <ArrowRight size={16} />
          </Link>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="btn-ghost">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
