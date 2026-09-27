'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { services } from '@/lib/content'

const topics = [
  { value: 'general', label: 'General enquiry' },
  { value: 'proposal', label: 'Request a proposal' },
  { value: 'gea', label: 'Enterprise architecture / digital government' },
  ...services.map((s) => ({ value: s.slug, label: s.title })),
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm({ initialTopic }: { initialTopic?: string }) {
  const valid = topics.some((t) => t.value === initialTopic)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const body = await res.json()
      if (!res.ok) throw new Error(body.error || 'Something went wrong')
      setStatus('sent')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setStatus('error')
    }
  }

  const field =
    'w-full rounded-xl border border-ink/10 bg-cream px-4 py-3.5 text-sm outline-none transition focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10'

  return (
    <AnimatePresence mode="wait">
      {status === 'sent' ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center rounded-3xl bg-white p-12 text-center shadow-xl"
        >
          <CheckCircle2 className="h-16 w-16 text-brand-olive" />
          <h3 className="mt-6 text-2xl font-bold">Thank you — message received.</h3>
          <p className="mt-3 text-ink/60">A consultant will get back to you within one business day.</p>
          <button onClick={() => setStatus('idle')} className="btn-outline mt-8">Send another message</button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-5 rounded-3xl bg-white p-8 shadow-xl sm:grid-cols-2 sm:p-10"
        >
          <label className="text-sm font-medium">
            Full name *
            <input name="name" required maxLength={120} className={`${field} mt-2`} />
          </label>
          <label className="text-sm font-medium">
            Organisation
            <input name="organisation" maxLength={160} className={`${field} mt-2`} />
          </label>
          <label className="text-sm font-medium">
            Email *
            <input name="email" type="email" required maxLength={160} className={`${field} mt-2`} />
          </label>
          <label className="text-sm font-medium">
            Phone
            <input name="phone" type="tel" maxLength={40} className={`${field} mt-2`} />
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            How can we help?
            <select name="topic" defaultValue={valid ? initialTopic : 'general'} className={`${field} mt-2`}>
              {topics.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            Message *
            <textarea name="message" required rows={5} maxLength={4000} className={`${field} mt-2 resize-y`} />
          </label>
          {/* honeypot */}
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          {status === 'error' && <p className="text-sm text-red-600 sm:col-span-2">{error}</p>}
          <button type="submit" disabled={status === 'sending'} className="btn-primary sm:col-span-2 disabled:opacity-70">
            {status === 'sending' ? <Loader2 className="animate-spin" size={18} /> : <Send size={16} />}
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
