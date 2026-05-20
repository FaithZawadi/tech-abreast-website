'use client'
import Image from 'next/image'

const VALUES = [
  { id: '01', label: 'Expertise',     sub: 'Skilled & professional delivery',  accent: 'orange' },
  { id: '02', label: 'Integrity',     sub: 'Our word is our bond',              accent: 'olive'  },
  { id: '03', label: 'Value',         sub: 'Innovation-driven results',         accent: 'orange' },
  { id: '04', label: 'Passion',       sub: 'We breathe ICT',                   accent: 'olive'  },
  { id: '05', label: 'Relationships', sub: 'Trusted partnerships',              accent: 'orange' },
]

const CERTS = [
  { v: 'ISO',  s: 'Certified'  },
  { v: 'ITIL', s: 'Framework'  },
  { v: 'GDPR', s: 'Compliant'  },
  { v: '24/7', s: 'Operations' },
]

const WHY = [
  'ISO & ITIL-based frameworks',
  'Global experience, local delivery',
  'Human-centered approach',
  'Proven success across industries',
  'End-to-end service accountability',
]

// Value card — ::before replaced with an absolutely-positioned <div>
function ValueCard({ v, isLast }: { v: typeof VALUES[0]; isLast: boolean }) {
  const isOrange = v.accent === 'orange'
  const accentColor = isOrange ? 'var(--orange)' : 'var(--olive)'
  const glowBg = isOrange
    ? 'linear-gradient(to bottom, rgba(242,101,34,0.06), transparent)'
    : 'linear-gradient(to bottom, rgba(139,155,42,0.06), transparent)'
  const borderTopColor = accentColor
  const hoverBorderColor = isOrange ? 'rgba(242,101,34,0.6)' : 'rgba(139,155,42,0.6)'

  return (
    <div
      style={{
        borderRadius: '14px',
        padding: '22px 18px 18px',
        border: `1px solid var(--border)`,
        borderTop: `3px solid ${borderTopColor}`,
        background: 'var(--panel)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.2s, border-color 0.2s',
        cursor: 'default',
        ...(isLast ? { gridColumn: '1 / -1' } : {}),
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(-3px)'
        el.style.borderColor = hoverBorderColor
        el.style.borderTopColor = accentColor
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = ''
        el.style.borderColor = 'var(--border)'
        el.style.borderTopColor = accentColor
      }}
    >
      {/* replaces ::before pseudo-element */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '80px',
        background: glowBg,
        pointerEvents: 'none',
      }} />

      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '10px' }}>
        {v.id}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 900, letterSpacing: '0.02em', lineHeight: 1, marginBottom: '8px', color: accentColor }}>
        {v.label}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
        {v.sub}
      </div>
      <div style={{ height: '2px', borderRadius: '2px', marginTop: '14px', width: '32px', background: accentColor }} />
    </div>
  )
}

export default function About() {
  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .about-grid    { grid-template-columns: 1fr !important; }
          .mission-why   { grid-template-columns: 1fr !important; }
          .values-grid   { grid-template-columns: repeat(2, 1fr) !important; }
          .cert-grid     { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .cert-grid   { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <section id="about" style={{ padding: '96px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--orange)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-dim)', letterSpacing: '0.15em' }}>ABOUT US</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.03em', margin: 0 }}>
              WHO WE <span style={{ color: 'var(--orange)' }}>ARE</span>
            </h2>
          </div>

          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>

            {/* LEFT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--orange), var(--olive))', zIndex: 1, pointerEvents: 'none' }} />
                <Image src="/team.png" alt="Technology Abreast team" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="(max-width: 900px) 100vw, 50vw" />
              </div>

              <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--panel)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '8px', letterSpacing: '0.12em' }}>VISION</div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.75, margin: 0 }}>
                  A powerhouse in offering unique and workable ICT solutions — enabling clients in digital platforms and adding value to their business processes.
                </p>
              </div>

              <div className="mission-why" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--panel)', border: '1px solid rgba(242,101,34,0.25)', borderLeft: '3px solid var(--orange)' }}>
                  <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '8px', letterSpacing: '0.12em' }}>MISSION</div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.75, margin: 0 }}>
                    Passionately offering unique, workable, and reliable ICT services — Managed IT, Strategic Consultancy, BI, Domain Services, Security Audits, ICT Governance, and Business Automation.
                  </p>
                </div>

                <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--panel)', border: '1px solid rgba(139,155,42,0.25)', borderLeft: '3px solid var(--olive)' }}>
                  <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '12px', letterSpacing: '0.12em' }}>WHY CHOOSE US</div>
                  {WHY.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: i < WHY.length - 1 ? '9px' : 0, fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--olive)', flexShrink: 0, marginTop: '1px' }}>✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-dim)', letterSpacing: '0.15em', flexShrink: 0 }}>CORE VALUES</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
              </div>

              <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {VALUES.map((v, i) => (
                  <ValueCard key={v.id} v={v} isLast={i === VALUES.length - 1} />
                ))}
              </div>

              <div className="cert-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px' }}>
                {CERTS.map(m => (
                  <div key={m.v} style={{ padding: '14px 8px', borderRadius: '10px', background: 'var(--panel)', border: '1px solid var(--border)', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 900, color: 'var(--orange)', letterSpacing: '-0.01em' }}>{m.v}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: 'var(--text-dim)', marginTop: '3px', letterSpacing: '0.04em' }}>{m.s}</div>
                  </div>
                ))}
              </div>

              <div>
                <a
                  href="#contact"
                  style={{ display: 'inline-block', padding: '12px 32px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', border: '1px solid var(--border-bright)', color: 'var(--olive)', textDecoration: 'none', transition: 'all 0.2s', background: 'transparent' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--olive-pale)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                >
                  WORK WITH US →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}