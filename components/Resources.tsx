'use client'
import ImageSlot from './ImageSlot'

const RES = [
  { id:'01', type:'CASE STUDY', icon:'📦', title:'Kenload — Logistics Digital Transformation', desc:'How Technology Abreast enabled Kenload to modernise operations with cloud infrastructure and real-time data visibility.', tags:['cloud','logistics'], col:'var(--olive)' },
  { id:'02', type:'CASE STUDY', icon:'🚚', title:'Tanload — Transport Management System',       desc:'Delivering a fully integrated TMS for Tanload, improving fleet utilisation and reducing operational costs by 40%.', tags:['TMS','automation'], col:'var(--orange)' },
  { id:'03', type:'INSIGHT',    icon:'📖', title:'ICT Governance in East African Enterprises',  desc:'A practical guide to implementing ITIL and ISO frameworks in growing African businesses.', tags:['ITIL','ISO'],        col:'var(--olive)' },
  { id:'04', type:'WHITE PAPER',icon:'📑', title:'The Future of AI in African Business',        desc:'How predictive analytics, NLP, and machine learning are reshaping industries across the continent.', tags:['AI','ML'],         col:'var(--orange)' },
]

export default function Resources() {
  return (
    <section id="resources" style={{ padding: '96px 48px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '2px', background: 'var(--olive)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-dim)', letterSpacing: '0.15em' }}>RESOURCES</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.03em' }}>
            KNOWLEDGE <span style={{ color: 'var(--olive)' }}>HUB</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {RES.map(r => (
            <div key={r.id} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--panel)', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
              {/* Image slot */}
              <ImageSlot label={`${r.title} — cover image`} height="150px" />
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', padding: '3px 10px', borderRadius: '3px', background: r.col === 'var(--olive)' ? 'rgba(139,155,42,0.12)' : 'rgba(242,101,34,0.12)', color: r.col, border: `1px solid ${r.col === 'var(--olive)' ? 'rgba(139,155,42,0.25)' : 'rgba(242,101,34,0.25)'}`, letterSpacing: '0.1em' }}>{r.type}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-dim)' }}>{r.id}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)', marginBottom: '8px', lineHeight: 1.4 }}>{r.title}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.73rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '14px' }}>{r.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {r.tags.map(t => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', padding: '2px 8px', borderRadius: '3px', background: 'var(--panel-2)', color: 'var(--text-dim)', border: '1px solid var(--border)' }}>#{t}</span>)}
                  </div>
                  <a href="#contact" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: r.col, textDecoration: 'none' }}>READ →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
