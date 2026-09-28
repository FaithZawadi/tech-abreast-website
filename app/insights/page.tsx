import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { CtaBand, PageHero, Reveal } from '@/components/ui'
import JsonLd from '@/components/JsonLd'
import { articles } from '@/lib/insights'
import { accent } from '@/lib/accent'
import { breadcrumbLd, pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Insights: ICT, Cybersecurity & Digital Government Guides',
  description:
    'Practical guides from Technology Abreast on managed IT services in Kenya, data protection compliance, disaster recovery and government enterprise architecture.',
  path: '/insights',
})

const fmt = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }])} />
      <PageHero
        eyebrow="Insights"
        title={<>Practical guidance, <span className="text-wing">no jargon.</span></>}
        text="Guides from our consultants on managing IT, protecting data and building digital government — written for decision-makers in Kenya and across Africa."
      />
      <section className="bg-muted py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 2) * 0.08}>
              <Link href={`/insights/${a.slug}`} className="card-hover group flex h-full flex-col overflow-hidden rounded-3xl bg-surface">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={a.image} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width:768px) 50vw, 100vw" />
                  <span className={`absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-semibold text-white ${accent(i).bg}`}>{a.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="text-xl font-bold leading-snug">{a.title}</h2>
                  <p className="mt-3 flex-1 leading-relaxed text-fg/65">{a.description}</p>
                  <div className="mt-6 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-fg/50">
                      <Clock size={14} /> {a.readMins} min read · {fmt(a.date)}
                    </span>
                    <span className={`inline-flex items-center gap-1 font-semibold ${accent(i).text}`}>
                      Read <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
