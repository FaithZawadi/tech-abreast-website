'use client'
import { useState } from 'react'
import { Send, MapPin, Mail, Phone, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.85rem',
    padding: '11px 14px',
    borderRadius: '8px',
    background: 'var(--panel-2)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ padding: '96px 48px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '2px', background: 'var(--olive)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Contact Us</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}>
            Let's <span style={{ color: 'var(--orange)' }}>Work Together</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '40px', alignItems: 'start' }}>

          {/* Left — info */}
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '32px' }}>
              Ready to take the next step in digital transformation? Tell us about your project and we'll get back to you within 24 hours.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {[
                { icon: <MapPin size={15} />, label: 'Location', val: 'Nairobi, Kenya' },
                { icon: <Mail size={15} />, label: 'Email', val: 'info@tech-abreast.com' },
                { icon: <Phone size={15} />, label: 'Phone', val: '+254 xxx xxx xxx' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(242,101,34,0.08)', border: '1px solid rgba(242,101,34,0.2)',
                    color: 'var(--orange)',
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{c.label}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
              <a href="#contact"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  padding: '12px', borderRadius: '8px',
                  fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 700,
                  background: 'var(--orange)', color: 'white', textDecoration: 'none',
                  boxShadow: '0 2px 16px rgba(242,101,34,0.3)', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(242,101,34,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(242,101,34,0.3)' }}>
                Request a Demo <ArrowRight size={15} />
              </a>
              <a href="#contact"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  padding: '12px', borderRadius: '8px',
                  fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 600,
                  border: '1px solid var(--border-bright)', color: 'var(--olive)',
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--olive-pale)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'none' }}>
                Book a Consultation
              </a>
            </div>

            {/* Quick links */}
            <div style={{ borderRadius: '12px', background: 'var(--panel)', border: '1px solid var(--border)', overflow: 'hidden' }}>
              <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Our Services
              </div>
              {['Managed ICT Services', 'Digital & Domain Solutions', 'IT Outsourcing & Support', 'Business Intelligence', 'Software & Automation'].map((l, i, arr) => (
                <a key={l} href="#services"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '11px 16px',
                    fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500,
                    color: 'var(--text-muted)', textDecoration: 'none',
                    borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--orange)'; e.currentTarget.style.background = 'rgba(242,101,34,0.04)'; e.currentTarget.style.paddingLeft = '20px' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '16px' }}>
                  {l}
                  <ArrowRight size={13} style={{ opacity: 0.4, flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--panel)' }}>
            {/* Form header */}
            <div style={{
              padding: '20px 28px',
              borderBottom: '1px solid var(--border)',
              background: 'var(--panel-2)',
            }}>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '2px' }}>Send Us a Message</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>We typically respond within 24 hours.</p>
            </div>

            {submitted ? (
              <div style={{ padding: '56px 28px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>Message Sent!</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Thank you for reaching out. We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ padding: '28px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  {[
                    { key: 'name',  label: 'Full Name',  ph: 'John Kamau',           type: 'text'  },
                    { key: 'email', label: 'Email Address', ph: 'john@company.co.ke', type: 'email' },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '7px' }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.ph}
                        required
                        value={(form as any)[f.key]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--orange)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '7px' }}>
                    Service of Interest
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ ...inputStyle, background: 'var(--panel-2)' }}
                    onFocus={e => e.currentTarget.style.borderColor = 'var(--orange)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
                  >
                    <option value="">Select a service...</option>
                    <option>Managed ICT Services</option>
                    <option>IT Support & Outsourcing</option>
                    <option>Digital Services</option>
                    <option>Software & AI Solutions</option>
                    <option>Consultancy & Advisory</option>
                    <option>Technical Services</option>
                    <option>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '7px' }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your project or challenge..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'var(--orange)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    padding: '13px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                    fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 700,
                    background: 'var(--orange)', color: 'white',
                    boxShadow: '0 2px 16px rgba(242,101,34,0.3)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(242,101,34,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(242,101,34,0.3)' }}
                >
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}