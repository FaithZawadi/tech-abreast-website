'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ServiceIcon } from './ui'
import { services } from '@/lib/content'
import { accent } from '@/lib/accent'

const filters = ['All', 'Service', 'Solution'] as const

export default function ServicesExplorer() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const list = services.filter((s) => filter === 'All' || s.kind === filter)

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
              filter === f ? 'bg-ink text-white' : 'bg-surface text-fg/70 hover:text-fg'
            }`}
          >
            {f === 'All' ? 'All' : `${f}s`}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((s, i) => (
            <motion.div
              layout
              key={s.slug}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="card-hover group flex h-full gap-6 rounded-3xl bg-surface p-7"
              >
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors group-hover:text-white ${accent(i).soft} ${accent(i).hoverBg}`}>
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </span>
                <span className="flex-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-olive">{s.kind}</span>
                  <span className="mt-1 block text-xl font-bold text-fg">{s.title}</span>
                  <span className="mt-2 block leading-relaxed text-fg/60">{s.summary}</span>
                  <span className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold ${accent(i).text}`}>
                    Details <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
