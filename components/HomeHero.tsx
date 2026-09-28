'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const words = ['Managed ICT Services', 'Enterprise Architecture', 'Digital Government', 'Cybersecurity', 'Data & AI']

export default function HomeHero() {
  const [i, setI] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 140])
  const fade = useTransform(scrollY, [0, 500], [1, 0.2])

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src="/images/hero.jpg" alt="Technology Abreast consultants in a network operations centre" fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      <div className="rays -left-80 top-10" />

      <motion.div style={{ opacity: fade }} className="container-x relative pb-24 pt-36">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-brand-lime"
        >
          Technology Abreast · ICT Consultancy &amp; Managed IT Services in Nairobi, Kenya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Digital Business <span className="text-wing">Enablers.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex h-10 items-center gap-2 text-lg font-medium text-white/85 sm:gap-3 sm:text-2xl"
        >
          <span className="whitespace-nowrap text-white/50">Expertise in</span>
          <span className="relative inline-block h-full min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[i]}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-y-0 left-0 flex items-center whitespace-nowrap text-brand-amber"
              >
                {words[i]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
        >
          We help governments, institutions and businesses plan, build and run technology that works — from ICT
          strategy and enterprise architecture to 24x7 managed services. People before technology, always.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link href="/services" className="btn-primary">
            Explore Our Services <ArrowRight size={16} />
          </Link>
          <Link href="/digital-government" className="btn-ghost">
            Digital Government Practice
          </Link>
        </motion.div>
      </motion.div>

      <a href="#intro" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white">
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="block">
          <ChevronDown size={28} />
        </motion.span>
      </a>
    </section>
  )
}
