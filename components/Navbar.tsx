'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const NAV = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services', sub: ['Managed ICT Services','IT Support & Outsourcing','Digital Services','Software & AI','Consultancy & Advisory','Technical Services'] },
  { label: 'Solutions',  href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Resources',  href: '#resources' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [drop, setDrop]           = useState<string|null>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>

      {/* ── TOP BAR ─────────────────────────────────────────── */}
      <div style={{
        background: 'var(--orange)',
        padding: '6px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <a href="mailto:info@tech-abreast.com"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'white', textDecoration: 'none', opacity: 0.92 }}>
            <Mail size={11} /> info@tech-abreast.com
          </a>
          <a href="tel:+254000000000"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'white', textDecoration: 'none', opacity: 0.92 }}>
            <Phone size={11} /> +254 xxx xxx xxx
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'white', opacity: 0.75 }}>
            Nairobi, Kenya · EAT (UTC+3)
          </span>
          {/* Social icons */}
          {['in','tw','fb'].map(s => (
            <a key={s} href="#"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', fontWeight: 700, color: 'white', opacity: 0.75, textDecoration: 'none', textTransform: 'uppercase', transition: 'opacity 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.75'}>
              {s}
            </a>
          ))}
        </div>
      </div>

      {/* ── MAIN NAV ────────────────────────────────────────── */}
      <div style={{
        background: scrolled ? 'white' : 'white',
        borderBottom: `3px solid var(--orange)`,
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.3s',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
      }}>

        {/* Logo + wordmark */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ position: 'relative', width: '54px', height: '54px' }}>
            <Image
              src="/logo-transparent.png"
              alt="Technology Abreast"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: '#1a1a10', letterSpacing: '-0.01em' }}>
              Technology <span style={{ color: 'var(--orange)' }}>Abreast</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: 'var(--olive)', letterSpacing: '0.2em', marginTop: '3px', textTransform: 'uppercase' }}>
              Passion & Expertise Combined
            </div>
          </div>
        </a>

        {/* Desktop nav links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0' }} className="hidden lg:flex">
          {NAV.map(link => (
            <div key={link.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => link.sub && setDrop(link.label)}
              onMouseLeave={() => setDrop(null)}>
              <a
                href={link.href}
                style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  padding: '8px 14px',
                  fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 600,
                  color: '#2a2a18',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'color 0.15s, background 0.15s',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--orange)'; e.currentTarget.style.background = 'rgba(242,101,34,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#2a2a18'; e.currentTarget.style.background = 'transparent' }}
              >
                {link.label}
                {link.sub && <ChevronDown size={12} style={{ opacity: 0.6 }} />}
              </a>

              {/* Dropdown */}
              {link.sub && drop === link.label && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 4px)', left: 0,
                  background: 'white',
                  border: '1px solid rgba(242,101,34,0.2)',
                  borderTop: '3px solid var(--orange)',
                  borderRadius: '0 0 10px 10px',
                  minWidth: '220px',
                  padding: '6px',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                  zIndex: 200,
                }}>
                  {link.sub.map(s => (
                    <a key={s} href="#services"
                      style={{
                        display: 'block', padding: '9px 12px',
                        fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 500,
                        color: '#3a3a20', textDecoration: 'none', borderRadius: '6px',
                        transition: 'all 0.15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(242,101,34,0.07)'; e.currentTarget.style.color = 'var(--orange)'; e.currentTarget.style.paddingLeft = '18px' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#3a3a20'; e.currentTarget.style.paddingLeft = '12px' }}>
                      {s}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <ThemeToggle />
          <a href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '9px 20px', borderRadius: '8px',
              fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 700,
              background: 'var(--orange)', color: 'white',
              textDecoration: 'none',
              boxShadow: '0 2px 12px rgba(242,101,34,0.35)',
              transition: 'all 0.2s',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--orange-dim)'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(242,101,34,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--orange)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(242,101,34,0.35)' }}>
            Request a Quote
          </a>

          {/* Mobile burger */}
          <button className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1a1a10', padding: '4px' }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ─────────────────────────────────────── */}
      {mobileOpen && (
        <div style={{ background: 'white', borderBottom: '3px solid var(--orange)', padding: '12px 24px 20px' }}>
          {NAV.map(link => (
            <a key={link.label} href={link.href}
              style={{ display: 'block', padding: '12px 0', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 600, color: '#2a2a18', textDecoration: 'none', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
              onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact"
            style={{ display: 'block', marginTop: '14px', padding: '12px', textAlign: 'center', background: 'var(--orange)', color: 'white', borderRadius: '8px', fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none' }}
            onClick={() => setMobileOpen(false)}>
            Request a Quote
          </a>
        </div>
      )}
    </header>
  )
}
