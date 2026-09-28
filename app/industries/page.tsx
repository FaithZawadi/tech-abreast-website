import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react'
import { CtaBand, PageHero, Reveal } from '@/components/ui'
import { industries, services } from '@/lib/content'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Industries We Serve',
  description:
    'ICT solutions for the public sector & NGOs, banking, healthcare, education, hospitality, retail, manufacturing, engineering and construction in Kenya and East Africa.',
  path: '/industries',
})

const serviceTitle = (slug: string) => services.find((s) => s.slug === slug)?.title ?? slug

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title={<>Technology that fits <span className="text-wing">your sector.</span></>}
        text="Our work with the public sector, multinational corporates and small businesses gives us the context to tailor the right solution for each industry."
        image="/images/industries/public-sector.jpg"
      />

      {/* Jump bar */}
      <nav className="sticky top-20 z-30 border-b border-fg/5 bg-surface/95 backdrop-blur" aria-label="Industries">
        <div className="container-x flex gap-2 overflow-x-auto py-3">
          {industries.map((ind) => (
            <a
              key={ind.slug}
              href={`#${ind.slug}`}
              className="whitespace-nowrap rounded-full border border-fg/10 px-4 py-2 text-xs font-semibold text-fg/70 transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              {ind.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="py-20">
        <div className="container-x space-y-10">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug}>
              <article
                id={ind.slug}
                className={`group grid scroll-mt-40 overflow-hidden rounded-3xl bg-muted ${i % 2 ? 'lg:grid-cols-[3fr_2fr]' : 'lg:grid-cols-[2fr_3fr]'}`}
              >
                <div className={`relative min-h-[280px] overflow-hidden ${i % 2 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width:1024px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <span className="text-5xl font-extrabold text-wing">{String(i + 1).padStart(2, '0')}</span>
                    <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{ind.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">{ind.text}</p>
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-brand-orange">The challenge</h3>
                      <ul className="mt-4 space-y-3">
                        {ind.challenges.map((c) => (
                          <li key={c} className="flex gap-3 text-sm leading-relaxed text-fg/70">
                            <AlertTriangle size={16} className="mt-0.5 shrink-0 text-brand-orange" /> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-brand-olive">How we help</h3>
                      <ul className="mt-4 space-y-3">
                        {ind.solutions.map((s) => (
                          <li key={s} className="flex gap-3 text-sm leading-relaxed text-fg/80">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-olive" /> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-fg/10 pt-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-fg/50">Related services</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ind.services.map((slug) => (
                        <Link
                          key={slug}
                          href={`/services/${slug}`}
                          className="rounded-full bg-surface px-4 py-2 text-xs font-semibold text-fg/75 shadow-sm transition-colors hover:bg-ink hover:text-white"
                        >
                          {serviceTitle(slug)}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={`/contact?topic=${ind.services[0]}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:gap-3"
                    >
                      Talk to us about {ind.title} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
