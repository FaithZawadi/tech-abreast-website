'use client'
import { useState } from 'react'
import { Server, Monitor, Globe, Brain, BookOpen, Cloud, ChevronRight } from 'lucide-react'

const SVCS = [
  { id: '01', icon: <Server size={18} />, title: 'Managed ICT Services',      desc: 'Fully managed IT functions, interim support, and tailored outsourcing — your infrastructure, our responsibility.', tags: ['infrastructure','outsourcing','SLA'], col: 'var(--orange)' },
  { id: '02', icon: <Monitor size={18} />, title: 'IT Support & Outsourcing', desc: 'Service Desk, network/server management, proactive monitoring, and CIO-as-a-Service plans.', tags: ['helpdesk','NOC','monitoring'], col: 'var(--olive)' },
  { id: '03', icon: <Globe size={18} />, title: 'Digital Services',            desc: 'Social media management, BI & analytics, domain registration, web hosting, and SSL certificates.', tags: ['BI','analytics','hosting'], col: 'var(--orange)' },
  { id: '04', icon: <Brain size={18} />, title: 'Software & AI Solutions',     desc: 'Custom software, enterprise integrations, intelligent automation, and AI-powered tools.', tags: ['ML/AI','RPA','dev'], col: 'var(--olive)' },
  { id: '05', icon: <BookOpen size={18} />, title: 'Consultancy & Advisory',   desc: 'ICT strategy, mentoring, M&A support, cost analysis, and comprehensive security audits.', tags: ['strategy','audit','ISMS'], col: 'var(--orange)' },
  { id: '06', icon: <Cloud size={18} />, title: 'Technical Services',          desc: 'Cloud, storage, network & comms, disaster recovery, and remote working solution design.', tags: ['cloud','DR','VPN'], col: 'var(--olive)' },
]

export default function Services() {
  const [hov, setHov] = useState<string|null>(null)
  return (
    <section id="services" className="circuit-bg" style={{ padding: '96px 48px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '2px', background: 'var(--olive)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-dim)', letterSpacing: '0.15em' }}>SERVICES</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.03em' }}>
            WHAT WE <span style={{ color: 'var(--olive)' }}>OFFER</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
          {SVCS.map(s => (
            <div key={s.id}
              style={{ padding: '28px', borderRadius: '12px', background: hov === s.id ? 'var(--panel-2)' : 'var(--panel)', border: `1px solid ${hov === s.id ? s.col : 'var(--border)'}`, transform: hov === s.id ? 'translateY(-4px)' : 'none', transition: 'all 0.25s', cursor: 'default', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={() => setHov(s.id)} onMouseLeave={() => setHov(null)}>
              {/* top bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${s.col}, transparent)`, opacity: hov === s.id ? 1 : 0, transition: 'opacity 0.3s' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${s.col === 'var(--orange)' ? 'rgba(242,101,34,0.1)' : 'rgba(139,155,42,0.1)'}`, color: s.col, border: `1px solid ${s.col === 'var(--orange)' ? 'rgba(242,101,34,0.2)' : 'rgba(139,155,42,0.2)'}`, transition: 'background 0.2s' }}>
                  {s.icon}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-dim)' }}>SVC_{s.id}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.73rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>{s.desc}</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                {s.tags.map(t => (
                  <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', padding: '2px 8px', borderRadius: '3px', background: 'var(--panel-2)', color: 'var(--text-dim)', border: '1px solid var(--border)' }}>#{t}</span>
                ))}
              </div>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: hov === s.id ? s.col : 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.2s' }}>
                LEARN MORE <ChevronRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
