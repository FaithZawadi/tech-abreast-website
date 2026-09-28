import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import HomeHero from '@/components/HomeHero'
import ApproachGrid from '@/components/ApproachGrid'
import EALayers from '@/components/illustrations/EALayers'
import { ArrowLink, Counter, CtaBand, Marquee, Reveal, SectionHeading, ServiceIcon } from '@/components/ui'
import { certifications, eaToolkit, industries, services, stats, whyUs } from '@/lib/content'
import { accent } from '@/lib/accent'

export default function Home() {
  const featured = services.filter((s) => s.featured)
  const frameworks = [...certifications, ...eaToolkit[0].items, 'SOA & API management', 'ArchiMate® / UML']

  return (
    <>
      <HomeHero />

      {/* Stats strip */}
      <section id="intro" className="relative z-10 -mt-16">
        <div className="container-x">
          <div className="grid grid-cols-2 overflow-hidden rounded-3xl bg-surface shadow-2xl shadow-black/10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="border-fg/5 p-8 text-center [&:not(:last-child)]:border-r">
                <div className={`text-4xl font-extrabold sm:text-5xl ${i % 2 ? 'text-brand-olive' : 'text-brand-orange'}`}>
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-widest text-fg/55">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About intro */}
      <section className="py-24 lg:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image src="/images/team.jpg" alt="ICT consultants collaborating in a modern office" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
            </div>
            <div className="absolute -bottom-8 -right-4 max-w-[16rem] rounded-2xl bg-ink p-6 text-white shadow-2xl sm:-right-8">
              <p className="text-sm italic leading-relaxed text-white/80">
                “An ICT services company that puts people before technology.”
              </p>
              <div className="bg-wing mt-4 h-1 w-16 rounded-full" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title={<>Passion and expertise, <span className="text-wing">combined.</span></>}
              text="Technology Abreast Limited is a registered ICT company in Kenya with distributed personnel capabilities across ICT fields. We formulate and lead ICT strategy, govern the demand side of ICT on our clients’ behalf, and deliver projects using recognised methodologies — then measure and report on the benefits realised."
            />
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4">
                {whyUs.map((w) => (
                  <li key={w} className="flex gap-3 text-fg/80">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-brand-olive" size={20} /> {w}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ArrowLink href="/about">More about us</ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="IT services built around your business"
              text="A full spectrum of ICT services and solutions — from strategy and architecture to day-to-day operations."
            />
            <Reveal><ArrowLink href="/services">View all {services.length} services</ArrowLink></Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card-hover group relative flex h-full flex-col overflow-hidden rounded-3xl bg-surface p-8"
                >
                  <span className={`absolute right-6 top-5 text-6xl font-extrabold text-fg/[0.04] transition-colors ${accent(i).hoverText}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:text-white ${accent(i).soft} ${accent(i).hoverBg}`}>
                    <ServiceIcon name={s.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-fg">{s.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-fg/60">{s.summary}</p>
                  <span className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${accent(i).text}`}>
                    Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${accent(i).bg}`} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Digital government feature */}
      <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
        <div className="grid-lines absolute inset-0" />
        <div className="rays -left-60 bottom-0" />
        <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              light
              eyebrow="Featured practice"
              title={<>Enterprise Architecture for <span className="text-wing">Digital Government</span></>}
              text="We help governments build a common language for e-services: TOGAF- and Zachman-aligned enterprise architecture frameworks, interoperability standards, costed roadmaps and the capacity to sustain them."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {['Current state & gap analysis', 'Interoperability & API standards', 'Technical specs & CAPEX/OPEX', 'Training & helpdesk mentorship'].map((t, i) => (
                  <div key={t} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${accent(i).bg}`} /> {t}
                  </div>
                ))}
              </div>
              <Link href="/digital-government" className="btn-primary mt-10">
                See our GEA methodology <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <EALayers className="mx-auto w-full max-w-xl" />
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our approach"
            title="Twelve commitments behind every engagement"
            text="Humanised, flexible and results-focused — never tying clients into contractual knots."
          />
          <div className="mt-14">
            <ApproachGrid />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-muted py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Industries" title="Sector know-how where it counts" />
            <Reveal><ArrowLink href="/industries">All industries</ArrowLink></Reveal>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 4) * 0.06}>
                <Link href={`/industries#${ind.slug}`} className="group relative block aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image src={ind.image} alt={ind.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(min-width:1024px) 25vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className={`mb-3 block h-1 w-8 rounded-full transition-all duration-500 group-hover:w-16 ${accent(i + Math.floor(i / 4)).bg}`} />
                    <h3 className="font-semibold text-white">{ind.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks marquee */}
      <section className="py-16">
        <div className="container-x mb-8 text-center">
          <span className="eyebrow text-brand-olive">Frameworks & certifications we work with</span>
        </div>
        <Marquee items={frameworks} />
      </section>

      <CtaBand />
    </>
  )
}
