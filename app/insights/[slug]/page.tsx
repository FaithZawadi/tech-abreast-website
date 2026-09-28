import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2, Clock } from 'lucide-react'
import { CtaBand, PageHero } from '@/components/ui'
import JsonLd from '@/components/JsonLd'
import { articles } from '@/lib/insights'
import { company, services } from '@/lib/content'
import { breadcrumbLd, pageMeta, siteUrl } from '@/lib/seo'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = articles.find((x) => x.slug === params.slug)
  if (!a) return {}
  return { ...pageMeta({ title: a.title, description: a.description, path: `/insights/${a.slug}` }), keywords: a.keywords }
}

const fmt = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = articles.find((x) => x.slug === params.slug)
  if (!a) notFound()
  const service = services.find((s) => s.slug === a.service)
  const others = articles.filter((x) => x.slug !== a.slug)
  const path = `/insights/${a.slug}`

  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: a.title,
            description: a.description,
            datePublished: a.date,
            dateModified: a.date,
            image: `${siteUrl}${a.image}`,
            keywords: a.keywords.join(', '),
            mainEntityOfPage: `${siteUrl}${path}`,
            author: { '@type': 'Organization', name: company.name, url: siteUrl },
            publisher: { '@id': `${siteUrl}/#organization` },
          },
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
            { name: a.title, path },
          ]),
        ]}
      />
      <PageHero eyebrow={a.category} title={a.title} text={a.description} image={a.image}>
        <p className="mt-6 flex items-center gap-2 text-sm text-white/60">
          <Clock size={14} /> {a.readMins} min read · {fmt(a.date)} · {company.name}
        </p>
      </PageHero>

      <section className="py-20">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_300px]">
          <article className="max-w-3xl">
            {a.sections.map((s) => (
              <section key={s.heading} className="mb-12">
                <h2 className="text-2xl font-bold sm:text-3xl">{s.heading}</h2>
                {s.body?.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-lg leading-relaxed text-fg/75">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="mt-5 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-lg leading-relaxed text-fg/80">
                        <CheckCircle2 size={20} className="mt-1 shrink-0 text-brand-olive" /> {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <Link href="/insights" className="inline-flex items-center gap-2 font-semibold text-brand-orange">
              <ArrowLeft size={16} /> All insights
            </Link>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {service && (
              <div className="rounded-3xl bg-ink p-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-lime">Related service</p>
                <h3 className="mt-3 text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-white/70">{service.summary}</p>
                <Link href={`/services/${service.slug}`} className="btn-primary mt-6 w-full !py-3">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            )}
            <div className="rounded-3xl bg-muted p-7">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-fg/60">More insights</h3>
              <ul className="mt-4 space-y-4">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/insights/${o.slug}`} className="text-sm font-semibold leading-snug text-fg/85 hover:text-brand-orange">
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand title="Need help putting this into practice?" text="Talk to a senior consultant — we’ll give you clear, justified recommendations." />
    </>
  )
}
