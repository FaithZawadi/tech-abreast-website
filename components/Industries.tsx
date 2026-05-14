'use client'
import { useState } from 'react'
import ImageSlot from './ImageSlot'

const INDS = [
  { id:'01', icon:'🏦', label:'Banking & Finance',    desc:'Core banking, fintech, fraud detection AI.' },
  { id:'02', icon:'✈️', label:'Travel & Hospitality', desc:'Booking platforms, PMS, loyalty systems.' },
  { id:'03', icon:'🏥', label:'Healthcare',           desc:'EMR/EHR, telemedicine, patient data security.' },
  { id:'04', icon:'🏛️', label:'Public Sector & NGOs', desc:'E-government, citizen portals, grants mgmt.' },
  { id:'05', icon:'🎓', label:'Education',            desc:'LMS, virtual classrooms, campus networks.' },
  { id:'06', icon:'🛒', label:'Retail & Manufacturing',desc:'POS, supply chain, ERP, inventory automation.' },
  { id:'07', icon:'⚙️', label:'Engineering',          desc:'Project mgmt, CAD integration, IoT sensors.' },
  { id:'08', icon:'🏗️', label:'Construction',         desc:'Site mgmt, equipment tracking, BIM workflows.' },
]

export default function Industries() {
  const [hov, setHov] = useState<string|null>(null)
  return (
    <section id="industries" className="circuit-bg" style={{ padding: '96px 48px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '2px', background: 'var(--orange)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-dim)', letterSpacing: '0.15em' }}>INDUSTRIES</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.03em' }}>
            SECTORS WE <span style={{ color: 'var(--orange)' }}>SERVE</span>
          </h2>
        </div>

        {/* Banner image slot */}
        <ImageSlot label="industries banner / team photo" height="180px" className="mb-8" />
        <div style={{ marginBottom: '24px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px' }}>
          {INDS.map(ind => (
            <div key={ind.id}
              style={{ padding: '24px 18px', borderRadius: '12px', background: hov === ind.id ? 'var(--panel-2)' : 'var(--panel)', border: `1px solid ${hov === ind.id ? 'var(--border-bright)' : 'var(--border)'}`, transform: hov === ind.id ? 'translateY(-3px)' : 'none', transition: 'all 0.2s', cursor: 'default' }}
              onMouseEnter={() => setHov(ind.id)} onMouseLeave={() => setHov(null)}>
              <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{ind.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text)', marginBottom: '6px' }}>{ind.label}</h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
