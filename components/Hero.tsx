'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Cpu, Shield, Zap, Globe, Users, TrendingUp, ChevronDown } from 'lucide-react'

const LINES = [
  { p: 'boot',  t: 'loading managed_ict_services .......... OK', c: 'var(--olive)' },
  { p: 'boot',  t: 'loading digital_transformation ........ OK', c: 'var(--olive)' },
  { p: 'boot',  t: 'loading ai_solutions .................. OK', c: 'var(--olive)' },
  { p: 'sys',   t: 'uptime: 99.97% | clients: 200+ | exp: 15yrs', c: 'var(--orange)' },
  { p: 'ready', t: 'Technology Abreast // Nairobi, Kenya',        c: 'var(--text)' },
]

const STATS = [
  { v: '200+',   l: 'Clients',       icon: <Users size={18} /> },
  { v: '15+',    l: 'Yrs Exp.',      icon: <TrendingUp size={18} /> },
  { v: '99.97%', l: 'Uptime',        icon: <Zap size={18} /> },
  { v: '8+',     l: 'Industries',    icon: <Globe size={18} /> },
]

const BADGES = [
  { icon: <Cpu size={14} />,    label: 'AI & ML Solutions' },
  { icon: <Shield size={14} />, label: 'ISO / ITIL Certified' },
  { icon: <Zap size={14} />,    label: '24/7 NOC Support' },
]

export default function Hero() {
  const [vis, setVis] = useState(0)
  const [chars, setChars] = useState(0)
  const lineRef = useRef(0)
  const charRef = useRef(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
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
        }, 80)
      }
    }, 18)
    return () => clearInterval(iv)
  }, [vis, mounted])

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.7); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-fade-1 { animation: fadeSlideUp 0.6s ease both; }
        .hero-fade-2 { animation: fadeSlideUp 0.6s 0.1s ease both; }
        .hero-fade-3 { animation: fadeSlideUp 0.6s 0.2s ease both; }
        .hero-fade-4 { animation: fadeSlideUp 0.6s 0.3s ease both; }
        .hero-fade-5 { animation: fadeSlideUp 0.6s 0.4s ease both; }
        .hero-fade-r { animation: fadeSlideUp 0.7s 0.25s ease both; }
        .logo-float  { animation: floatLogo 5s ease-in-out infinite; }
        .stat-card:hover { border-color: var(--orange) !important; transform: translateY(-3px); }
        .stat-card { transition: border-color 0.2s, transform 0.2s; }
        .cta-primary:hover  { transform: translateY(-2px); box-shadow: 0 10px 36px rgba(242,101,34,0.55) !important; }
        .cta-primary        { transition: transform 0.2s, box-shadow 0.2s; }
        .cta-secondary:hover { border-color: var(--olive) !important; color: var(--olive) !important; background: var(--olive-pale) !important; transform: translateY(-2px); }
        .cta-secondary       { transition: all 0.2s; }
        .cursor-block { display: inline-block; width: 7px; height: 13px; background: var(--orange); vertical-align: middle; margin-left: 2px; animation: cursorBlink 1s steps(1) infinite; }

        /* Responsive */
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; padding: 110px 28px 60px !important; gap: 48px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-right { order: -1; }
        }
        @media (max-width: 480px) {
          .hero-grid { padding: 100px 20px 48px !important; }
          .hero-heading { font-size: clamp(2.4rem, 12vw, 3.4rem) !important; }
          .cta-row { flex-direction: column !important; }
          .cta-row a { width: 100% !important; justify-content: center !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <section
        id="home"
        className="hero-grid"
        style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          padding: '130px 72px 80px',
          background: 'var(--bg)',
          position: 'relative',
          overflow: 'hidden',
          gap: '72px',
        }}
      >
        {/* ── BACKGROUND IMAGE ── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <Image
            src="/images/hero.png"
            alt=""
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center right' }}
          />
          {/* Dark overlay so text stays legible */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, rgba(8,10,8,0.72) 0%, rgba(8,10,8,0.58) 45%, rgba(8,10,8,0.30) 100%)',
          }} />
          {/* Subtle vignette around edges */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.30) 100%)',
          }} />
        </div>

        {/* ── Decorative backgrounds ── */}
        <div className="circuit-bg" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />
        {/* Warm radial — top right */}
        <div style={{
          position: 'absolute', top: '-8%', right: '-4%',
          width: '640px', height: '640px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(242,101,34,0.09) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        {/* Olive radial — bottom left */}
        <div style={{
          position: 'absolute', bottom: '-5%', left: '-8%',
          width: '520px', height: '520px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,155,42,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        {/* Subtle top-center gradient line */}
        <div style={{
          position: 'absolute', top: 0, left: '10%', right: '10%', height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(242,101,34,0.5), rgba(139,155,42,0.5), transparent)',
          pointerEvents: 'none',
        }} />

        {/* ══════════ LEFT ══════════ */}
        <div style={{ position: 'relative', zIndex: 1 }}>

          {/* Status pill */}
          <div className="hero-fade-1" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '7px 18px', borderRadius: '100px',
            background: 'var(--panel)', border: '1px solid var(--border)',
            fontSize: '0.7rem', fontFamily: 'var(--font-sans)', fontWeight: 500,
            color: '#cdd0cb', letterSpacing: '0.03em', marginBottom: '28px',
          }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: 'var(--olive)', flexShrink: 0,
              animation: 'pulseDot 2s ease-in-out infinite',
            }} />
            Nairobi, Kenya
            <span style={{ width: '1px', height: '12px', background: 'var(--border)', margin: '0 2px' }} />
            <span style={{ color: 'var(--olive)', fontWeight: 700 }}>Systems Online</span>
          </div>

          {/* Heading */}
          <div className="hero-fade-2">
            <h1 style={{ margin: '0 0 20px', lineHeight: 1 }}>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2.8rem, 5.2vw, 4.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                color: '#f0f0ee',
              }}>
                Technology
              </div>

              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(2.8rem, 5.2vw, 4.8rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.95,
                  color: 'var(--orange)',
                  textShadow: '0 4px 24px rgba(242,101,34,0.2)',
                }}>
                  Abreast
                </div>
                {/* Wavy underline */}
                <svg
                  aria-hidden="true"
                  style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%' }}
                  height="7" viewBox="0 0 200 7" preserveAspectRatio="none"
                >
                  <path d="M0 5 Q25 1 50 4 Q75 7 100 4 Q125 1 150 4 Q175 7 200 4"
                    stroke="var(--olive)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                </svg>
              </div>

              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
                fontWeight: 600,
                color: '#9ca899',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                marginTop: '16px',
              }}>
                Limited
              </div>
            </h1>
          </div>

          {/* Sub-heading */}
          <p className="hero-fade-3" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.88rem, 1.3vw, 1.02rem)',
            color: '#cdd0cb',
            lineHeight: 1.8,
            maxWidth: '440px',
            margin: '0 0 36px',
          }}>
            Your trusted partner in{' '}
            <strong style={{ color: '#f0f0ee', fontWeight: 600 }}>Managed ICT Services</strong>,
            Strategic Consultancy, and Digital Transformation across East Africa.
          </p>

          {/* CTAs */}
          <div className="hero-fade-4 cta-row" style={{
            display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px',
          }}>
            <a
              href="#services"
              className="cta-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 30px', borderRadius: '10px',
                fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 700,
                background: 'var(--orange)', color: '#fff', textDecoration: 'none',
                boxShadow: '0 5px 28px rgba(242,101,34,0.42)',
                letterSpacing: '0.01em',
              }}
            >
              Explore Services <ArrowRight size={15} strokeWidth={2.5} />
            </a>

            <a
              href="#contact"
              className="cta-secondary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 30px', borderRadius: '10px',
                fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 600,
                border: '1.5px solid var(--border-bright)', color: '#f0f0ee',
                textDecoration: 'none', background: 'transparent',
                letterSpacing: '0.01em',
              }}
            >
              Talk to an Expert
            </a>
          </div>

{/* Stats grid — commented out for now
          <div className="hero-fade-5 stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
          }}>
            {STATS.map(s => (
              <div
                key={s.l}
                className="stat-card"
                style={{
                  padding: '18px 10px 14px',
                  borderRadius: '14px',
                  background: 'var(--panel)',
                  border: '1px solid var(--border)',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  color: 'var(--orange)', display: 'flex',
                  justifyContent: 'center', marginBottom: '8px',
                }}>
                  {s.icon}
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.45rem', fontWeight: 800,
                  color: '#f0f0ee', letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}>
                  {s.v}
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.63rem', fontWeight: 500,
                  color: '#9ca899', marginTop: '5px',
                  lineHeight: 1.3, letterSpacing: '0.02em',
                }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
          */}
        </div>

        {/* ══════════ RIGHT ══════════ */}
        <div
          className="hero-right hero-fade-r"
          style={{
            position: 'relative', zIndex: 1,
            display: 'flex', flexDirection: 'column', gap: '14px',
          }}
        >
          {/* Logo card */}
          <div style={{
            borderRadius: '22px',
            background: 'var(--panel)',
            border: '1px solid var(--border)',
            padding: '44px 32px 32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Inner glow behind logo */}
            <div style={{
              position: 'absolute', top: 0, left: '50%',
              transform: 'translateX(-50%)',
              width: '260px', height: '260px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(242,101,34,0.13) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Top corner accent lines */}
            <div style={{
              position: 'absolute', top: 0, right: 0, width: '80px', height: '80px',
              borderTop: '2px solid var(--orange)', borderRight: '2px solid var(--orange)',
              borderRadius: '0 22px 0 0', opacity: 0.3, pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, width: '80px', height: '80px',
              borderBottom: '2px solid var(--olive)', borderLeft: '2px solid var(--olive)',
              borderRadius: '0 0 0 22px', opacity: 0.25, pointerEvents: 'none',
            }} />

            <div className="logo-float" style={{ position: 'relative', zIndex: 1 }}>
              <Image
                src="/logo-transparent.png"
                alt="Technology Abreast Limited"
                width={175}
                height={175}
                style={{
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 10px 40px rgba(242,101,34,0.3))',
                }}
              />
            </div>

            {/* Divider + tagline */}
            <div style={{
              marginTop: '22px', textAlign: 'center',
              position: 'relative', zIndex: 1,
              paddingTop: '20px',
              borderTop: '1px solid var(--border)',
              width: '100%',
            }}>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem', fontWeight: 700,
                color: 'var(--text)', marginBottom: '6px',
                letterSpacing: '-0.01em',
              }}>
                Passion &amp; Expertise{' '}
                <span style={{ color: 'var(--orange)' }}>Combined</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.76rem', color: 'var(--text-dim)',
                lineHeight: 1.5,
              }}>
                Enabling businesses through smart, scalable technology
              </div>
            </div>

            {/* Badge row */}
            <div style={{
              display: 'flex', gap: '8px',
              marginTop: '18px', flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              {BADGES.map(b => (
                <div key={b.label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '6px 13px', borderRadius: '100px',
                  background: 'var(--panel-2)',
                  border: '1px solid var(--border)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.68rem', fontWeight: 600,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.01em',
                }}>
                  <span style={{ color: 'var(--olive)' }}>{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* Terminal card */}
          <div style={{
            borderRadius: '14px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            background: 'var(--panel)',
          }}>
            {/* Title bar */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              padding: '10px 16px',
              borderBottom: '1px solid var(--border)',
              background: 'var(--panel-2)',
            }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem', color: 'var(--text-dim)',
                marginLeft: '8px', userSelect: 'none',
              }}>
                tech-abreast ~ bash
              </span>
              <span style={{
                marginLeft: 'auto',
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                fontSize: '0.6rem', fontFamily: 'var(--font-mono)',
                padding: '3px 9px', borderRadius: '4px',
                background: 'rgba(139,155,42,0.12)',
                color: 'var(--olive)',
                fontWeight: 700, letterSpacing: '0.05em',
              }}>
                <span style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: 'var(--olive)',
                  animation: 'pulseDot 2s ease-in-out infinite',
                }} />
                LIVE
              </span>
            </div>

            {/* Terminal body */}
            <div style={{
              padding: '16px 18px',
              minHeight: '136px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              lineHeight: 1.6,
            }}>
              {LINES.slice(0, vis).map((line, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '12px',
                  marginBottom: '4px',
                }}>
                  <span style={{
                    color: 'var(--text-dim)', minWidth: '48px',
                    flexShrink: 0, userSelect: 'none',
                  }}>
                    [{line.p}]
                  </span>
                  <span style={{ color: line.c }}>{line.t}</span>
                </div>
              ))}

              {vis < LINES.length && (
                <div style={{ display: 'flex', gap: '12px', marginBottom: '4px' }}>
                  <span style={{
                    color: 'var(--text-dim)', minWidth: '48px',
                    flexShrink: 0, userSelect: 'none',
                  }}>
                    [{LINES[vis]?.p}]
                  </span>
                  <span style={{ color: LINES[vis]?.c }}>
                    {LINES[vis]?.t.slice(0, chars)}
                    <span className="cursor-block" />
                  </span>
                </div>
              )}

              {vis >= LINES.length && (
                <div style={{
                  display: 'flex', gap: '10px',
                  alignItems: 'center', marginTop: '8px',
                }}>
                  <span style={{ color: 'var(--olive)', fontWeight: 700 }}>
                    ta@nairobi:~$
                  </span>
                  <span className="cursor-block" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Scroll hint ── */}
        <a
          href="#services"
          aria-label="Scroll to services"
          style={{
            position: 'absolute', bottom: '32px', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
            color: '#9ca899', textDecoration: 'none',
            fontFamily: 'var(--font-sans)', fontSize: '0.65rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            animation: 'fadeSlideUp 0.8s 0.8s ease both',
            opacity: 0,
          }}
        >
          <span>Scroll</span>
          <ChevronDown size={16} style={{ animation: 'floatLogo 1.8s ease-in-out infinite' }} />
        </a>
      </section>
    </>
  )
}