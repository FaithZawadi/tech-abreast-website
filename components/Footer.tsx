'use client'
import Image from 'next/image'
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react'

const LINKS = {
  Services:  ['Managed ICT', 'IT Support', 'Digital Services', 'Software & AI', 'Consultancy', 'Technical'],
  Solutions: ['Cloud Services', 'Network & Security', 'Data Centre', 'Disaster Recovery', 'Remote Working'],
  Company:   ['About Us', 'Industries', 'Resources', 'Case Studies', 'Contact'],
}

const SOCIALS = [
  { label: 'LinkedIn',  short: 'in',  href: '#' },
  { label: 'Twitter',   short: 'tw',  href: '#' },
  { label: 'Facebook',  short: 'fb',  href: '#' },
  { label: 'YouTube',   short: 'yt',  href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>

      {/* ── CTA BAND ───────────────────────────────────────── */}
      <div style={{
        background: 'var(--orange)',
        padding: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '32px',
        flexWrap: 'wrap',
      }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', fontWeight: 700, color: 'white', marginBottom: '6px', letterSpacing: '-0.01em' }}>
            Ready to transform your business?
          </h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
            Let's discuss how Technology Abreast can help you grow through ICT.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', borderRadius: '8px',
              fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700,
              background: 'white', color: 'var(--orange)', textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
            Request a Quote <ArrowRight size={15} />
          </a>
          <a href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', borderRadius: '8px',
              fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.5)', color: 'white', textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}>
            Book a Consultation
          </a>
        </div>
      </div>

      {/* ── MAIN FOOTER ────────────────────────────────────── */}
      <div style={{ padding: '64px 48px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>

            {/* Brand column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ position: 'relative', width: '48px', height: '48px', flexShrink: 0 }}>
                  <Image src="/logo-transparent.png" alt="Technology Abreast" fill style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em' }}>
                    Technology <span style={{ color: 'var(--orange)' }}>Abreast</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--text-dim)', letterSpacing: '0.2em' }}>LIMITED</div>
                </div>
              </div>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '280px', marginBottom: '20px' }}>
                Your trusted partner in Managed ICT Services, Strategic Consultancy, and Digital Transformation across East Africa.
              </p>

              {/* Contact mini-list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                {[
                  { icon: <MapPin size={12} />, val: 'Nairobi, Kenya' },
                  { icon: <Mail size={12} />,   val: 'info@tech-abreast.com' },
                  { icon: <Phone size={12} />,  val: '+254 xxx xxx xxx' },
                ].map(c => (
                  <div key={c.val} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--orange)', flexShrink: 0 }}>{c.icon}</span>
                    {c.val}
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div style={{ display: 'flex', gap: '8px' }}>
                {SOCIALS.map(s => (
                  <a key={s.short} href={s.href} title={s.label}
                    style={{
                      width: '34px', height: '34px', borderRadius: '8px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 700,
                      background: 'var(--panel)', border: '1px solid var(--border)',
                      color: 'var(--text-muted)', textDecoration: 'none',
                      textTransform: 'uppercase', transition: 'all 0.15s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--orange)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'var(--orange)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--panel)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}>
                    {s.short}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(LINKS).map(([group, links]) => (
              <div key={group}>
                <div style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700,
                  color: 'var(--text)', letterSpacing: '0.04em', textTransform: 'uppercase',
                  marginBottom: '16px',
                  paddingBottom: '10px',
                  borderBottom: '2px solid var(--orange)',
                  display: 'inline-block',
                }}>
                  {group}
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {links.map(l => (
                    <li key={l}>
                      <a href="#"
                        style={{
                          fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
                          color: 'var(--text-muted)', textDecoration: 'none',
                          transition: 'all 0.15s', display: 'inline-block',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--orange)'; e.currentTarget.style.paddingLeft = '6px' }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.paddingLeft = '0' }}>
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── BOTTOM BAR ───────────────────────────────────── */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingTop: '24px', borderTop: '1px solid var(--border)',
            flexWrap: 'wrap', gap: '12px',
          }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              © {year} Technology Abreast Limited · Nairobi, Kenya · All rights reserved.
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: 'var(--olive)', display: 'inline-block',
                animation: 'pulse-dot 2s infinite',
              }} />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}