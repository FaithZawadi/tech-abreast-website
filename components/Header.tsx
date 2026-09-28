'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import { ServiceIcon } from './ui'
import { company, nav, services } from '@/lib/content'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on navigation
  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setMobileServices(false)
  }, [pathname])

  // Escape closes any open menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setServicesOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Stop the page scrolling behind the mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))
  const solid = scrolled || open

  const openServices = () => {
    clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const closeServicesSoon = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  const linkClass = (href: string) =>
    `relative flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors ${
      solid ? 'text-fg/80 hover:text-brand-orange' : 'text-white/85 hover:text-white'
    } ${isActive(href) ? (solid ? '!text-brand-orange' : '!text-white') : ''}`

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
          solid ? 'bg-surface/95 shadow-lg shadow-black/5 backdrop-blur' : 'bg-transparent'
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <Logo dark={solid} />

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
            {nav.filter((item) => item.href !== '/').map((item) =>
              item.href === '/services' ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServicesSoon}
                >
                  <div className="flex items-center">
                    <Link href={item.href} className={linkClass(item.href)}>
                      {item.label}
                      {isActive(item.href) && (
                        <motion.span layoutId="nav-underline" className="bg-wing absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full" />
                      )}
                    </Link>
                    <button
                      type="button"
                      aria-label="Show services"
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                      onClick={() => setServicesOpen((o) => !o)}
                      className={`-ml-3 rounded-full p-1 ${solid ? 'text-fg/60' : 'text-white/70'}`}
                    >
                      <ChevronDown size={15} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        id="services-menu"
                        initial={{ opacity: 0, y: 10, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 10, x: '-50%' }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full w-[720px] pt-3"
                      >
                        <div className="overflow-hidden rounded-3xl border border-fg/10 bg-surface p-3 shadow-2xl shadow-black/15">
                          <div className="grid grid-cols-2 gap-1">
                            {services.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-muted"
                              >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-brand-amber transition-colors group-hover:bg-brand-orange group-hover:text-white">
                                  <ServiceIcon name={s.icon} className="h-5 w-5" />
                                </span>
                                <span>
                                  <span className="block text-sm font-semibold text-fg">{s.title}</span>
                                  <span className="mt-0.5 line-clamp-1 block text-xs text-fg/55">{s.summary}</span>
                                </span>
                              </Link>
                            ))}
                          </div>
                          <Link
                            href="/services"
                            className="mt-2 flex items-center justify-between rounded-2xl bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-3"
                          >
                            View all services and solutions <ArrowRight size={16} className="text-brand-amber" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span layoutId="nav-underline" className="bg-wing absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full" />
                  )}
                </Link>
              ),
            )}
            <ThemeToggle className={`ml-2 ${solid ? 'text-fg hover:bg-fg/5' : 'text-white hover:bg-white/10'}`} />
            <Link href="/contact?topic=proposal" className="btn-primary ml-3 whitespace-nowrap !px-5 !py-2.5">
              Request a Proposal
            </Link>
          </nav>

          <div className="flex items-center gap-1 xl:hidden">
            <ThemeToggle className={solid ? 'text-fg' : 'text-white'} />
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className={`rounded-full p-2 ${solid ? 'text-fg' : 'text-white'}`}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-ink px-4 pb-8 pt-2 xl:hidden"
          >
            {nav.map((item) =>
              item.href === '/services' ? (
                <div key={item.href} className="border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <Link href={item.href} className={`block py-4 text-lg ${isActive(item.href) ? 'text-brand-orange' : 'text-white'}`}>
                      {item.label}
                    </Link>
                    <button
                      aria-label="Show services"
                      aria-expanded={mobileServices}
                      onClick={() => setMobileServices((o) => !o)}
                      className="rounded-full p-2 text-white/70"
                    >
                      <ChevronDown className={`transition-transform ${mobileServices ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <AnimatePresence initial={false}>
                    {mobileServices && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-1 pb-4">
                          {services.map((s) => (
                            <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm text-white/80 hover:bg-white/5">
                              <ServiceIcon name={s.icon} className="h-4 w-4 text-brand-amber" /> {s.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block border-b border-white/10 py-4 text-lg ${isActive(item.href) ? 'text-brand-orange' : 'text-white'}`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link href="/contact?topic=proposal" className="btn-primary mt-6 w-full">
              Request a Proposal
            </Link>
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <a href={`tel:${company.phoneIntl}`} className="flex items-center gap-2"><Phone size={14} className="text-brand-lime" /> {company.phone}</a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2"><Mail size={14} className="text-brand-orange" /> {company.email}</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
