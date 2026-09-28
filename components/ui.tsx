'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, animate } from 'framer-motion'
import {
  ArrowRight, BarChart3, Box, Code2, Compass, Globe, Layers, PhoneCall, Server,
  Share2, ShieldCheck, Truck, Wrench, type LucideIcon,
} from 'lucide-react'
import type { ServiceIcon as IconName } from '@/lib/content'

export function Reveal({
  children, delay = 0, y = 28, className = '',
}: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.8, ease: 'easeOut', onUpdate: (v) => setVal(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  )
}

export function SectionHeading({
  eyebrow, title, text, light = false, center = false,
}: { eyebrow: string; title: React.ReactNode; text?: string; light?: boolean; center?: boolean }) {
  return (
    <Reveal className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <span className={`eyebrow ${light ? 'text-brand-lime' : 'text-brand-olive'}`}>{eyebrow}</span>
      <h2
        className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-fg'}`}
      >
        {title}
      </h2>
      {text && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-white/70' : 'text-fg/65'}`}>{text}</p>}
    </Reveal>
  )
}

export function PageHero({
  eyebrow, title, text, image = '/images/hero.jpg', children,
}: { eyebrow: string; title: React.ReactNode; text: string; image?: string; children?: React.ReactNode }) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-ink pb-20 pt-40">
      <Image src={image} alt="" fill priority className="object-cover opacity-40" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div className="rays -left-72 top-0 opacity-70" />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="eyebrow text-brand-lime">{eyebrow}</span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{text}</p>
          {children}
        </motion.div>
      </div>
    </section>
  )
}

const icons: Record<IconName, LucideIcon> = {
  server: Server, compass: Compass, layers: Layers, shield: ShieldCheck, wrench: Wrench, code: Code2,
  chart: BarChart3, box: Box, truck: Truck, globe: Globe, phone: PhoneCall, share: Share2,
}

export function ServiceIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const Icon = icons[name]
  return <Icon className={className} strokeWidth={1.6} />
}

export function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-semibold ${light ? 'text-white' : 'text-fg'} hover:text-brand-orange`}
    >
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items]
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="animate-marquee flex w-max gap-4">
        {row.map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-fg/10 bg-surface px-6 py-3 text-sm font-medium text-fg/70 shadow-sm"
          >
            <span className={`mr-2 inline-block h-2 w-2 rounded-full ${i % 2 ? 'bg-brand-olive' : 'bg-brand-orange'}`} />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export function CtaBand({
  title = 'Ready to move your organisation forward?',
  text = 'Talk to our consultants about managed services, enterprise architecture or your next digital transformation programme.',
}: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <div className="rays -right-40 -top-72" />
      <div className="container-x relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {title.split(' ').slice(0, -2).join(' ')}{' '}
            <span className="text-wing">{title.split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="mt-4 text-white/70">{text}</p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-wrap gap-4">
          <Link href="/contact?topic=proposal" className="btn-primary">
            Request a Proposal <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact Us
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
