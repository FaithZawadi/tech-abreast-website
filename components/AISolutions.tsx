'use client'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import ImageSlot from './ImageSlot'

const AI_MODULES = [
  {
    id: '01',
    icon: '🧠',
    title: 'Predictive Analytics',
    desc: 'Machine learning models that forecast trends, detect anomalies, and surface actionable insights from your business data in real time.',
    tags: ['Machine Learning', 'Forecasting', 'BI'],
  },
  {
    id: '02',
    icon: '💬',
    title: 'NLP & Chatbots',
    desc: 'Intelligent chatbots and language pipelines that automate customer interactions, internal queries, and document processing.',
    tags: ['NLP', 'LLM', 'Automation'],
  },
  {
    id: '03',
    icon: '👁️',
    title: 'Computer Vision',
    desc: 'Image and video analysis for quality control, security surveillance, document scanning, and operational monitoring at scale.',
    tags: ['Vision AI', 'OCR', 'Detection'],
  },
  {
    id: '04',
    icon: '⚙️',
    title: 'Custom ML Models',
    desc: 'End-to-end machine learning pipelines — from data preparation and model training to deployment and continuous monitoring.',
    tags: ['MLOps', 'Training', 'Inference'],
  },
]

const INTEGRATIONS = [
  { label: 'API & Middleware',  icon: '🔗' },
  { label: 'Legacy Integration', icon: '🏛️' },
  { label: 'Cloud / On-Prem',   icon: '☁️' },
  { label: 'Data Migration',    icon: '🔄' },
]

const METRICS = [
  { val: '87%', label: 'Automation Rate',    bar: 87, color: 'var(--orange)' },
  { val: '99%', label: 'System Uptime',      bar: 99, color: 'var(--olive)'  },
  { val: '65%', label: 'Cost Reduction',     bar: 65, color: 'var(--orange)' },
  { val: '98%', label: 'Client Satisfaction',bar: 98, color: 'var(--olive)'  },
]

export default function AISolutions() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="ai-solutions" style={{ padding: '96px 48px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '2px', background: 'var(--orange)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Software & AI</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Transforming Business with <span style={{ color: 'var(--orange)' }}>AI-Powered Innovation</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.75 }}>
            Smart software, seamless integration, and intelligent automation — built for the African business context.
          </p>
        </div>

        {/* Banner image slot */}
        <ImageSlot label="AI / software solutions banner" height="180px" />
        <div style={{ marginBottom: '32px' }} />

        {/* AI Capability Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginBottom: '32px' }}>
          {AI_MODULES.map(mod => (
            <div
              key={mod.id}
              style={{
                padding: '24px',
                borderRadius: '14px',
                background: hovered === mod.id ? 'var(--panel-2)' : 'var(--panel)',
                border: `1px solid ${hovered === mod.id ? 'rgba(242,101,34,0.4)' : 'var(--border)'}`,
                borderTop: `3px solid ${hovered === mod.id ? 'var(--orange)' : 'transparent'}`,
                transform: hovered === mod.id ? 'translateY(-4px)' : 'none',
                transition: 'all 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={() => setHovered(mod.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '14px' }}>{mod.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                {mod.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '14px' }}>
                {mod.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {mod.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 500,
                    padding: '3px 10px', borderRadius: '100px',
                    background: 'rgba(242,101,34,0.08)',
                    color: 'var(--orange)',
                    border: '1px solid rgba(242,101,34,0.15)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration + Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

          {/* System Integration */}
          <div style={{ padding: '32px', borderRadius: '14px', background: 'var(--panel)', border: '1px solid var(--border)' }}>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
              Seamless Integration
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
              Connecting legacy systems, cloud platforms, and enterprise applications without disruption.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
              {INTEGRATIONS.map(item => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '14px', borderRadius: '10px',
                  background: 'var(--panel-2)', border: '1px solid var(--border)',
                }}>
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 500, color: 'var(--text)' }}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div style={{
              padding: '16px 20px', borderRadius: '10px',
              background: 'rgba(242,101,34,0.05)',
              borderLeft: '3px solid var(--orange)',
            }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text)', fontStyle: 'italic', lineHeight: 1.65 }}>
                "Automation frees people to focus on what matters most — innovation."
              </p>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '8px', fontWeight: 500 }}>
                — Technology Abreast Limited
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div style={{ padding: '32px', borderRadius: '14px', background: 'var(--panel)', border: '1px solid var(--border)' }}>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
              Proven Performance
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '28px' }}>
              Measurable results delivered across our client engagements.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              {METRICS.map(m => (
                <div key={m.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-muted)' }}>{m.label}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 800, color: m.color }}>{m.val}</span>
                  </div>
                  <div style={{ height: '5px', borderRadius: '100px', background: 'var(--panel-2)', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${m.bar}%`,
                      borderRadius: '100px',
                      background: m.color,
                      boxShadow: `0 0 8px ${m.color}66`,
                    }} />
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '11px 24px', borderRadius: '8px',
                fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 700,
                background: 'var(--orange)', color: 'white', textDecoration: 'none',
                boxShadow: '0 2px 16px rgba(242,101,34,0.35)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(242,101,34,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(242,101,34,0.35)' }}
            >
              Request a Demo <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}