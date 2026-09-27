'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Logo from './Logo'
import { company, nav } from '@/lib/content'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`hidden overflow-hidden bg-ink text-white/70 transition-all duration-300 md:block ${
          scrolled ? 'max-h-0' : 'max-h-10'
        }`}
      >
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail size={13} className="text-brand-orange" /> {company.email}
            </a>
            <a href={`tel:${company.phoneIntl}`} className="flex items-center gap-2 hover:text-white">
              <Phone size={13} className="text-brand-lime" /> {company.phone}
            </a>
          </div>
          <span>{company.physical}</span>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-lg shadow-black/5 backdrop-blur' : 'bg-transparent'
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <Logo dark={scrolled} />

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled ? 'text-ink/80 hover:text-brand-orange' : 'text-white/85 hover:text-white'
                } ${isActive(item.href) ? (scrolled ? '!text-brand-orange' : '!text-white') : ''}`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="bg-wing absolute inset-x-4 -bottom-0.5 h-[3px] rounded-full"
                  />
                )}
              </Link>
            ))}
            <Link href="/contact?topic=proposal" className="btn-primary ml-4 !px-5 !py-2.5">
              Request a Proposal
            </Link>
          </nav>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
            className={`rounded-full p-2 lg:hidden ${scrolled ? 'text-ink' : 'text-white'}`}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-ink px-4 pb-8 pt-4 lg:hidden"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block border-b border-white/10 py-4 text-lg ${
                  isActive(item.href) ? 'text-brand-orange' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact?topic=proposal" className="btn-primary mt-6 w-full">
              Request a Proposal
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
