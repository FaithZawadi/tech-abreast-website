'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Cpu, Shield, Zap, Globe, Users, TrendingUp } from 'lucide-react'

const LINES = [
  { p: 'boot',  t: 'loading managed_ict_services ........... OK', c: 'var(--olive)' },
  { p: 'boot',  t: 'loading digital_transformation ......... OK', c: 'var(--olive)' },
  { p: 'boot',  t: 'loading ai_solutions ................... OK', c: 'var(--olive)' },
  { p: 'sys',   t: 'uptime: 99.97% | clients: 200+ | exp: 15yrs', c: 'var(--orange)' },
  { p: 'ready', t: 'Technology Abreast // Nairobi, Kenya',        c: 'var(--text)' },
]

const STATS = [
  { v: '200+',   l: 'Clients Served',    icon: <Users size={16} /> },
  { v: '15+',    l: 'Years Experience',  icon: <TrendingUp size={16} /> },
  { v: '99.97%', l: 'Uptime SLA',        icon: <Zap size={16} /> },
  { v: '8+',     l: 'Industries',        icon: <Globe size={16} /> },
]

const BADGES = [
  { icon: <Cpu size={15} />,    label: 'AI & ML Solutions' },
  { icon: <Shield size={15} />, label: 'ISO / ITIL Certified' },
  { icon: <Zap size={15} />,    label: '24/7 NOC Support' },
]

export default function Hero() {
  const [vis, setVis] = useState(0)
  const [chars, setChars] = useState(0)
  const lineRef = useRef(0)
  const charRef = useRef(0)

  useEffect(() => {
    const cur = LINES[lineRef.current]
    if (!cur) return
    const iv = setInterval(() => {
      charRef.current++
      setChars(charRef.current)
      if (charRef.current >= cur.t.length) {
        clearInterval(iv)
        setTimeout(() => {
          lineRef.current++
          setVis(lineRef.current)
          charRef.current = 0
          setChars(0)
        }, 60)
      }
    }, 16)
    return () => clearInterval(iv)
  }, [vis])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '130px 64px 80px',
      background: 'var(--bg)',
      position: 'relative',
      overflow: 'hidden',
      gap: '80px',
    }}>
      {/* Background elements */}
      <div className="circuit-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(242,101,34,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '0', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,155,42,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

      {/* ── LEFT ──────────────────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Status pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 16px', borderRadius: '100px',
          background: 'var(--panel)', border: '1px solid var(--border)',
          fontSize: '0.68rem', fontFamily: 'var(--font-sans)', fontWeight: 500,
          color: 'var(--text-muted)', letterSpacing: '0.02em', marginBottom: '32px',
        }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: 'var(--olive)', flexShrink: 0,
            animation: 'pulse-dot 2s infinite',
          }} />
          Nairobi, Kenya &nbsp;·&nbsp; <span style={{ color: 'var(--olive)', fontWeight: 600 }}>System Online</span>
        </div>

        {/* Heading */}
        <h1 style={{ marginBottom: '20px', lineHeight: 1 }}>
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: 'var(--text)',
          }}>
            Technology
          </div>
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: 'var(--orange)',
            position: 'relative',
            display: 'inline-block',
          }}>
            Abreast
            {/* Underline accent */}
            <svg style={{ position: 'absolute', bottom: '-6px', left: 0, width: '100%' }} height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
              <path d="M0 5 Q50 0 100 4 Q150 8 200 3" stroke="var(--olive)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
            fontWeight: 500,
            color: 'var(--text-dim)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginTop: '14px',
          }}>
            Limited
          </div>
        </h1>

        {/* Sub */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
          color: 'var(--text-muted)',
          lineHeight: 1.75,
          maxWidth: '460px',
          marginBottom: '36px',
        }}>
          Your trusted partner in <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Managed ICT Services</strong>, Strategic Consultancy, and Digital Transformation across East Africa.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '52px' }}>
          <a href="#services"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 28px', borderRadius: '10px',
              fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 700,
              background: 'var(--orange)', color: 'white', textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(242,101,34,0.4)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(242,101,34,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(242,101,34,0.4)' }}>
            Get Started <ArrowRight size={15} />
          </a>
          <a href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 28px', borderRadius: '10px',
              fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 600,
              border: '1.5px solid var(--border-bright)', color: 'var(--text)',
              textDecoration: 'none', background: 'transparent',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--olive)'; e.currentTarget.style.color = 'var(--olive)'; e.currentTarget.style.background = 'var(--olive-pale)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-bright)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'none' }}>
            Talk to an Expert
          </a>
        </div>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px' }}>
          {STATS.map(s => (
            <div key={s.l} style={{
              padding: '16px 12px', borderRadius: '12px',
              background: 'var(--panel)', border: '1px solid var(--border)',
              textAlign: 'center', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}>
              <div style={{ color: 'var(--orange)', display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>{s.icon}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', color: 'var(--text-dim)', marginTop: '4px', lineHeight: 1.3 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT ─────────────────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* Logo card */}
        <div style={{
          borderRadius: '20px',
          background: 'var(--panel)',
          border: '1px solid var(--border)',
          padding: '40px 32px 28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Glow behind logo */}
          <div style={{
            position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)',
            width: '200px', height: '200px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(242,101,34,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ animation: 'float 5s ease-in-out infinite', position: 'relative', zIndex: 1 }}>
            <Image
              src="/logo-transparent.png"
              alt="Technology Abreast"
              width={180}
              height={180}
              style={{ objectFit: 'contain', filter: 'drop-shadow(0 8px 32px rgba(242,101,34,0.35))' }}
            />
          </div>

          <div style={{
            marginTop: '20px', textAlign: 'center', position: 'relative', zIndex: 1,
            paddingTop: '20px', borderTop: '1px solid var(--border)', width: '100%',
          }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
              Passion & Expertise <span style={{ color: 'var(--orange)' }}>Combined</span>
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              Enabling businesses through smart, scalable technology
            </div>
          </div>

          {/* Badge row */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {BADGES.map(b => (
              <div key={b.label} style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '6px 12px', borderRadius: '100px',
                background: 'var(--panel-2)', border: '1px solid var(--border)',
                fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500,
                color: 'var(--text-muted)',
              }}>
                <span style={{ color: 'var(--olive)' }}>{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Terminal card */}
        <div style={{
          borderRadius: '14px', overflow: 'hidden',
          border: '1px solid var(--border)', background: 'var(--panel)',
        }}>
          {/* Title bar */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '10px 16px', borderBottom: '1px solid var(--border)',
            background: 'var(--panel-2)',
          }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-dim)', marginLeft: '8px' }}>
              tech-abreast ~ bash
            </span>
            <span style={{
              marginLeft: 'auto', fontSize: '0.58rem', fontFamily: 'var(--font-mono)',
              padding: '2px 8px', borderRadius: '4px',
              background: 'rgba(139,155,42,0.1)', color: 'var(--olive)',
            }}>
              ● LIVE
            </span>
          </div>

          {/* Terminal body */}
          <div style={{ padding: '16px 18px', minHeight: '130px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>
            {LINES.slice(0, vis).map((line, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '5px' }}>
                <span style={{ color: 'var(--text-dim)', minWidth: '46px', flexShrink: 0 }}>[{line.p}]</span>
                <span style={{ color: line.c }}>{line.t}</span>
              </div>
            ))}
            {vis < LINES.length && (
              <div style={{ display: 'flex', gap: '12px', marginBottom: '5px' }}>
                <span style={{ color: 'var(--text-dim)', minWidth: '46px', flexShrink: 0 }}>[{LINES[vis]?.p}]</span>
                <span style={{ color: LINES[vis]?.c }}>
                  {LINES[vis]?.t.slice(0, chars)}<span className="cursor-blink" />
                </span>
              </div>
            )}
            {vis >= LINES.length && (
              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <span style={{ color: 'var(--olive)', fontWeight: 700 }}>ta@nairobi:~$</span>
                <span className="cursor-blink" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}