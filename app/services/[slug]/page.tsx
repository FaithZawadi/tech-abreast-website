import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { CtaBand, PageHero, Reveal, ServiceIcon } from '@/components/ui'
import JsonLd from '@/components/JsonLd'
import { services } from '@/lib/content'
import { accent } from '@/lib/accent'
import { breadcrumbLd, pageMeta, serviceLd } from '@/lib/seo'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find((x) => x.slug === params.slug)
  if (!s) return {}
  return pageMeta({
    title: s.title,
    description: `${s.summary} ${s.kind === 'Service' ? 'ICT services' : 'ICT solutions'} from Technology Abreast, Nairobi, Kenya.`,
    path: `/services/${s.slug}`,
  })
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const index = services.findIndex((x) => x.slug === params.slug)
  if (index < 0) notFound()
  const s = services[index]
  const next = services[(index + 1) % services.length]
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 6)

  return (
    <>
      <JsonLd
        data={[
          serviceLd({ name: s.title, description: s.intro, path: `/services/${s.slug}` }),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: s.title, path: `/services/${s.slug}` },
          ]),
        ]}
      />
      <PageHero eyebrow={s.kind} title={s.title} text={s.intro}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={`/contact?topic=${s.slug}`} className="btn-primary">
            Discuss this service <ArrowRight size={16} />
          </Link>
          {s.slug === 'enterprise-architecture' && (
            <Link href="/digital-government" className="btn-ghost">
              View our GEA methodology
            </Link>
          )}
        </div>
      </PageHero>

      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-5 sm:grid-cols-2">
            {s.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 2) * 0.08}>
                <div className="card-hover h-full rounded-3xl border border-fg/10 p-7">
                  <span className={`text-sm font-bold ${accent(i).text}`}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 text-lg font-bold">{it.title}</h3>
                  <p className="mt-2 leading-relaxed text-fg/60">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-ink p-7 text-white">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange text-white">
                <ServiceIcon name={s.icon} className="h-7 w-7" />
              </span>
              <p className="mt-5 text-white/70">{s.summary}</p>
              <Link href={`/services/${next.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-amber">
                Next: {next.title} <ArrowRight size={15} />
              </Link>
            </div>
            <div className="rounded-3xl bg-muted p-7">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-fg/60">Other services</h4>
              <ul className="mt-4 space-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/services/${o.slug}`} className="text-sm font-medium text-fg/80 hover:text-brand-orange">
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
