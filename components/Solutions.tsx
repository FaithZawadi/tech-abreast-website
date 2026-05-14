'use client'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const SOLUTIONS = [
  {
    id: '01',
    label: 'Cloud Services',
    providers: ['Microsoft Azure', 'Google Cloud', 'AWS', 'ZOHO'],
    title: 'Multi-Cloud Infrastructure',
    desc: 'Deploy and manage workloads across Microsoft Azure, Google Cloud, AWS, and ZOHO — optimised for performance, security, and cost efficiency.',
    features: ['Cloud Migration', 'Cost Optimisation', 'Identity & Access', 'Hybrid Cloud'],
    color: 'var(--olive)',
    icon: '☁️',
  },
  {
    id: '02',
    label: 'Network & Security',
    providers: ['Cisco', 'Fortinet', 'Palo Alto', 'Ubiquiti'],
    title: 'Enterprise Network Security',
    desc: 'End-to-end network security from perimeter defence to endpoint protection, zero-trust architecture, and real-time threat monitoring.',
    features: ['Firewall Management', 'Threat Detection', 'Zero Trust', 'Security Audits'],
    color: 'var(--orange)',
    icon: '🔐',
  },
  {
    id: '03',
    label: 'Data Centre & Storage',
    providers: ['Dell EMC', 'HPE', 'NetApp', 'VMware'],
    title: 'Data Centre Architecture',
    desc: 'Design, build, and manage high-availability data centre environments with scalable storage, virtualisation, and performance optimisation.',
    features: ['Virtualisation', 'SAN/NAS Storage', 'Data Backup', 'Capacity Planning'],
    color: 'var(--olive)',
    icon: '🏢',
  },
  {
    id: '04',
    label: 'Disaster Recovery',
    providers: ['Veeam', 'Zerto', 'Commvault', 'Azure Site Recovery'],
    title: 'Business Continuity & DR',
    desc: 'Comprehensive DR strategies — RPO and RTO planning, failover testing, and automated recovery workflows to keep your operations running.',
    features: ['RPO/RTO Planning', 'Failover Testing', 'Geo-Redundancy', 'DR Runbooks'],
    color: 'var(--orange)',
    icon: '♻️',
  },
  {
    id: '05',
    label: 'Remote Working',
    providers: ['Microsoft 365', 'Zoom', 'Cisco Meraki', 'Citrix'],
    title: 'Distributed Workforce',
    desc: 'Enable your team to work securely from anywhere — VPN, VDI, collaboration tools, and unified communications for hybrid teams.',
    features: ['VPN & VDI', 'Collaboration Tools', 'Secure Access', 'Endpoint Management'],
    color: 'var(--olive)',
    icon: '💻',
  },
  {
    id: '06',
    label: 'ICT Device Support',
    providers: ['HP', 'Dell', 'Lenovo', 'Cisco'],
    title: 'Device Lifecycle Management',
    desc: 'Supply, installation, and ongoing support for all ICT hardware — desktops, laptops, servers, and networking gear with full lifecycle management.',
    features: ['Procurement', 'Installation', 'Warranty Support', 'Asset Tracking'],
    color: 'var(--orange)',
    icon: '📱',
  },
  {
    id: '07',
    label: 'Software & AI',
    providers: ['OpenAI', 'Azure AI', 'TensorFlow', 'Custom'],
    title: 'AI-Powered Software',
    desc: 'Custom software, enterprise integrations, intelligent automation, and AI-powered tools including predictive analytics and NLP chatbots.',
    features: ['Custom Software', 'ML Models', 'RPA & IoT', 'NLP Chatbots'],
    color: 'var(--olive)',
    icon: '🤖',
  },
]

export default function Solutions() {
  const [active, setActive] = useState(0)
  const sol = SOLUTIONS[active]
  const isOlive = sol.color === 'var(--olive)'
  const accentRgb = isOlive ? '139,155,42' : '242,101,34'

  return (
    <section id="solutions" style={{ padding: '96px 48px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '2px', background: 'var(--olive)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Solutions</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}>
            Technology That <span style={{ color: 'var(--orange)' }}>Scales With You</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '20px', alignItems: 'start' }}>

          {/* Solution list */}
          <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--panel)' }}>
            {SOLUTIONS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '13px 16px',
                  textAlign: 'left',
                  border: 'none',
                  borderLeft: active === i ? '3px solid var(--orange)' : '3px solid transparent',
                  borderBottom: i < SOLUTIONS.length - 1 ? '1px solid var(--border)' : 'none',
                  background: active === i ? 'rgba(242,101,34,0.06)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { if (active !== i) e.currentTarget.style.background = 'var(--panel-2)' }}
                onMouseLeave={e => { if (active !== i) e.currentTarget.style.background = 'transparent' }}
              >
                <span style={{ fontSize: '1rem', flexShrink: 0 }}>{s.icon}</span>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  fontWeight: active === i ? 600 : 400,
                  color: active === i ? 'var(--orange)' : 'var(--text-muted)',
                  transition: 'color 0.15s',
                }}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div style={{
            borderRadius: '14px',
            background: 'var(--panel)',
            border: '1px solid var(--border)',
            borderTop: `3px solid ${sol.color}`,
            padding: '36px',
            transition: 'border-color 0.3s',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px', gap: '16px' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-dim)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Solution {sol.id}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.3rem,2.5vw,1.7rem)',
                  fontWeight: 700,
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}>
                  {sol.title}
                </h3>
              </div>
              <div style={{ fontSize: '2.2rem', flexShrink: 0, marginTop: '4px' }}>{sol.icon}</div>
            </div>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.88rem',
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              marginBottom: '28px',
              maxWidth: '560px',
            }}>
              {sol.desc}
            </p>

            {/* Features */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px', marginBottom: '28px' }}>
              {sol.features.map(f => (
                <div key={f} style={{
                  padding: '12px 14px',
                  borderRadius: '8px',
                  background: `rgba(${accentRgb},0.06)`,
                  border: `1px solid rgba(${accentRgb},0.15)`,
                }}>
                  <div style={{ fontSize: '0.7rem', color: sol.color, marginBottom: '3px' }}>✓</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text)' }}>{f}</div>
                </div>
              ))}
            </div>

            {/* Partners */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-dim)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Technology Partners
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {sol.providers.map(p => (
                  <span key={p} style={{
                    padding: '6px 14px',
                    borderRadius: '100px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    background: 'var(--panel-2)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '11px 24px', borderRadius: '8px',
                fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 700,
                background: sol.color,
                color: 'white',
                textDecoration: 'none',
                boxShadow: `0 2px 16px rgba(${accentRgb},0.35)`,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 24px rgba(${accentRgb},0.5)` }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `0 2px 16px rgba(${accentRgb},0.35)` }}
            >
              Get in Touch <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}