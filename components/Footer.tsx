import Link from 'next/link'
import { Mail, MapPin, Phone, Inbox } from 'lucide-react'
import Logo from './Logo'
import { company, nav, services } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/70">
      <div className="bg-wing h-1 w-full" />
      <div className="rays -right-60 -top-60 opacity-60" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo />
          <p className="text-sm leading-relaxed">
            A registered ICT company in Kenya — {company.vision.toLowerCase()} offering unique, workable and reliable
            ICT solutions that add value to every business process.
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">Company</h4>
          <ul className="space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:text-brand-orange">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">Services</h4>
          <ul className="space-y-3 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition-colors hover:text-brand-lime">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">Get in touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-brand-orange" /> {company.physical}
            </li>
            <li className="flex gap-3">
              <Inbox size={18} className="shrink-0 text-brand-orange" /> {company.postal}
            </li>
            <li>
              <a href={`tel:${company.phoneIntl}`} className="flex gap-3 hover:text-white">
                <Phone size={18} className="shrink-0 text-brand-lime" /> {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex gap-3 hover:text-white">
                <Mail size={18} className="shrink-0 text-brand-lime" /> {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span className="text-white/50">{company.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
