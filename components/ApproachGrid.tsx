'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { approach } from '@/lib/content'

// Interactive grid: hovering / focusing a pillar highlights it and shows its detail.
export default function ApproachGrid() {
  const [active, setActive] = useState(0)
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
      <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-white">
        <div className="rays -right-72 -top-72" />
        <span className="relative text-7xl font-extrabold text-wing">{String(active + 1).padStart(2, '0')}</span>
        <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="relative mt-6">
          <h3 className="text-3xl font-bold">{approach[active].title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-white/70">{approach[active].text}</p>
        </motion.div>
        <p className="relative mt-10 text-sm text-white/50">
          Our capabilities may look like other providers’ — ours are humanised and flexible. We want to understand your
          business, deliver clear results and build a long-term relationship.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {approach.map((a, i) => (
          <button
            key={a.title}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
              active === i
                ? 'border-transparent bg-wing text-ink shadow-xl'
                : 'border-ink/10 bg-white text-ink hover:border-brand-orange/40'
            }`}
          >
            <span className={`text-xs font-bold ${active === i ? 'text-ink/60' : 'text-brand-orange'}`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="mt-2 block text-base font-semibold">{a.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
