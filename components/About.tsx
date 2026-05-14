'use client'
import ImageSlot from './ImageSlot'

const VALUES = [
  { id: '01', label: 'EXPERTISE',     sub: 'Skilled & Professional',    c: 'var(--orange)', angle: -90 },
  { id: '02', label: 'INTEGRITY',     sub: 'Our Word is Our Bond',       c: 'var(--olive)',  angle: -18 },
  { id: '03', label: 'VALUE',         sub: 'Innovation-Driven Results',  c: 'var(--orange)', angle:  54 },
  { id: '04', label: 'PASSION',       sub: 'We Breathe ICT',             c: 'var(--olive)',  angle: 126 },
  { id: '05', label: 'RELATIONSHIPS', sub: 'Trusted Partnerships',       c: 'var(--orange)', angle: 198 },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '96px 48px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '2px', background: 'var(--orange)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-dim)', letterSpacing: '0.15em' }}>ABOUT US</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.03em' }}>
            WHO WE <span style={{ color: 'var(--orange)' }}>ARE</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
          {/* LEFT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Image slot */}
            <ImageSlot label="team / office photo" height="220px" />

            {/* Vision */}
            <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--panel)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '8px', letterSpacing: '0.12em' }}>VISION</div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
                A powerhouse in offering unique and workable ICT solutions — enabling clients in digital platforms and adding value to their business processes.
              </p>
            </div>

            {/* Mission */}
            <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--panel)', border: `1px solid rgba(242,101,34,0.25)`, borderLeft: '3px solid var(--orange)' }}>
              <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '8px', letterSpacing: '0.12em' }}>MISSION</div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
                Passionately offering unique, workable, and reliable ICT services — Managed IT, Strategic Consultancy, BI, Domain Services, Security Audits, ICT Governance, and Business Automation.
              </p>
            </div>

            {/* Why */}
            <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--panel)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '14px', letterSpacing: '0.12em' }}>WHY CHOOSE US</div>
              {['ISO & ITIL-based frameworks','Global experience, local delivery','Human-centered approach','Proven success across industries','End-to-end service accountability'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--olive)', flexShrink: 0, marginTop: '1px' }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Pentagon */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-dim)', letterSpacing: '0.15em', alignSelf: 'flex-start' }}>CORE VALUES</div>
            <div style={{ position: 'relative', width: '360px', height: '360px' }}>
              <svg width="360" height="360" viewBox="0 0 360 360" style={{ position: 'absolute', inset: 0 }}>
                <polygon points="180,20 340,130 280,310 80,310 20,130" fill="none" stroke="rgba(139,155,42,0.12)" strokeWidth="1" strokeDasharray="6 4" />
                <polygon points="180,80 280,155 245,265 115,265 80,155" fill="rgba(242,101,34,0.04)" stroke="rgba(242,101,34,0.15)" strokeWidth="1" />
                {([[180,20],[340,130],[280,310],[80,310],[20,130]] as [number,number][]).map(([x,y],i) => (
                  <line key={i} x1="180" y1="180" x2={x} y2={y} stroke="rgba(139,155,42,0.08)" strokeWidth="1" />
                ))}
                <circle cx="180" cy="180" r="32" fill="rgba(242,101,34,0.08)" stroke="rgba(242,101,34,0.3)" strokeWidth="1.5" />
                <text x="180" y="175" textAnchor="middle" style={{ fontFamily: 'JetBrains Mono', fontSize: '7px', fill: 'var(--orange)' }}>TECH</text>
                <text x="180" y="187" textAnchor="middle" style={{ fontFamily: 'JetBrains Mono', fontSize: '7px', fill: 'var(--orange)' }}>ABREAST</text>
              </svg>
              {VALUES.map(v => {
                const rad = (v.angle * Math.PI) / 180
                const cx = 180 + 145 * Math.cos(rad)
                const cy = 180 + 145 * Math.sin(rad)
                return (
                  <div key={v.id} style={{
                    position: 'absolute', width: '82px', left: cx - 41, top: cy - 32,
                    background: 'var(--panel)', border: `1px solid ${v.c === 'var(--orange)' ? 'rgba(242,101,34,0.35)' : 'rgba(139,155,42,0.35)'}`,
                    borderRadius: '8px', padding: '8px', textAlign: 'center',
                    transition: 'transform 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 800, color: v.c, letterSpacing: '0.04em' }}>{v.label}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.46rem', color: 'var(--text-dim)', marginTop: '2px', lineHeight: 1.4 }}>{v.sub}</div>
                  </div>
                )
              })}
            </div>

            {/* Cert badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px', width: '100%' }}>
              {[{ v: 'ISO', s: 'Certified' }, { v: 'ITIL', s: 'Framework' }, { v: 'GDPR', s: 'Compliant' }, { v: '24/7', s: 'Operations' }].map(m => (
                <div key={m.v} style={{ padding: '12px 8px', borderRadius: '8px', background: 'var(--panel)', border: '1px solid var(--border)', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 900, color: 'var(--orange)' }}>{m.v}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: 'var(--text-dim)', marginTop: '2px' }}>{m.s}</div>
                </div>
              ))}
            </div>

            <a href="#contact"
              style={{ padding: '12px 32px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', border: '1px solid var(--border-bright)', color: 'var(--olive)', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--olive-pale)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
              WORK WITH US →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
