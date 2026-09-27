'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, FileText } from 'lucide-react'
import { eaPhases } from '@/lib/content'

export default function PhaseTimeline() {
  const [active, setActive] = useState(0)
  const p = eaPhases[active]
  const progress = ((active + 1) / eaPhases.length) * 100

  return (
    <div>
      {/* progress rail */}
      <div className="relative mb-8 h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div className="bg-wing absolute inset-y-0 left-0" animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} />
      </div>

      <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {eaPhases.map((ph, i) => (
            <button
              key={ph.id}
              onClick={() => setActive(i)}
              className={`flex min-w-[220px] items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all lg:min-w-0 ${
                active === i ? 'bg-white text-ink shadow-xl' : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className={`text-2xl font-extrabold ${active === i ? 'text-brand-orange' : 'text-white/30'}`}>{ph.id}</span>
              <span>
                <span className="block text-sm font-semibold">{ph.title}</span>
                <span className={`block text-xs ${active === i ? 'text-ink/50' : 'text-white/40'}`}>{ph.weeks}</span>
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-lime">Phase {p.id} · {p.weeks}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/15 px-4 py-1.5 text-xs font-semibold text-brand-amber">
                <FileText size={14} /> {p.output}
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">{p.title}</h3>
            <ul className="mt-8 space-y-4">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-white/75">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-lime" /> {pt}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-3">
              <button
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                disabled={active === 0}
                className="btn-ghost !px-5 !py-2 disabled:opacity-30"
              >
                Previous
              </button>
              <button
                onClick={() => setActive((a) => Math.min(eaPhases.length - 1, a + 1))}
                disabled={active === eaPhases.length - 1}
                className="btn-primary !px-5 !py-2 disabled:opacity-30"
              >
                Next phase
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
