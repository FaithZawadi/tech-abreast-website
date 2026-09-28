import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Accessibility, Briefcase, FileCheck2, Lock, MapPin, Network, ScrollText, Users } from 'lucide-react'
import EALayers from '@/components/illustrations/EALayers'
import InteropHub from '@/components/illustrations/InteropHub'
import PhaseTimeline from '@/components/PhaseTimeline'
import { CtaBand, PageHero, Reveal, SectionHeading } from '@/components/ui'
import JsonLd from '@/components/JsonLd'
import { assignments, eaDeliverables, eaFaqs, eaObjectives, eaTeam, eaToolkit } from '@/lib/content'
import { breadcrumbLd, pageMeta, serviceLd } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Government Enterprise Architecture & Digital Government',
  description:
    'TOGAF- and Zachman-aligned Government Enterprise Architecture Frameworks (GEAF), interoperability standards, e-government roadmaps and capacity building for public institutions.',
  path: '/digital-government',
})

const objectiveIcons = [Accessibility, Users, ScrollText, Network, Lock]

export default function DigitalGovernmentPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceLd({
            name: 'Government Enterprise Architecture & Digital Government',
            description: 'Government Enterprise Architecture Frameworks, interoperability standards, digitalisation roadmaps and capacity building.',
            path: '/digital-government',
          }),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Digital Government', path: '/digital-government' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: eaFaqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />
      <PageHero
        eyebrow="Enterprise architecture · Digital government"
        title={<>One architecture. <span className="text-wing">Connected government.</span></>}
        text="We develop Government Enterprise Architecture Frameworks that give every ministry and agency a common language, shared standards and a costed roadmap — so citizens get consistent, secure, joined-up e-services."
        image="/images/industries/public-sector.jpg"
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact?topic=gea" className="btn-primary">
            Request our capability statement <ArrowRight size={16} />
          </Link>
          <a href="#methodology" className="btn-ghost">Our methodology</a>
        </div>
      </PageHero>

      {/* Why GEA */}
      <section className="py-24 lg:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why enterprise architecture"
              title="From isolated systems to a single, citizen-centred service model"
              text="A Government Enterprise Architecture provides a standardised approach to developing and delivering services, a common set of standards for cross-agency delivery, an objective basis for reviewing ICT investment, and faster, more efficient delivery of e-services."
            />
            <Reveal delay={0.1} className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Administrative service modernisation', 'Digital platforms & shared services', 'Common service-delivery model'].map((t, i) => (
                <div key={t} className="rounded-2xl bg-muted p-5">
                  <span className="text-2xl font-extrabold text-wing">0{i + 1}</span>
                  <p className="mt-2 text-sm font-semibold text-fg/80">{t}</p>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.1} className="rounded-3xl bg-ink p-6 sm:p-10">
            <EALayers className="w-full" />
          </Reveal>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-muted py-24">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="What we deliver against"
            title="Five objectives every GEA framework must meet"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {eaObjectives.map((o, i) => {
              const Icon = objectiveIcons[i]
              return (
                <Reveal key={o.title} delay={i * 0.07}>
                  <div className="card-hover h-full rounded-3xl bg-surface p-7">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${i % 2 ? 'bg-brand-olive/15 text-brand-olive' : 'bg-brand-orange/15 text-brand-orange'}`}>
                      <Icon size={24} strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-5 font-bold">{o.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg/60">{o.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="relative scroll-mt-20 overflow-hidden bg-ink py-24 lg:py-32">
        <div className="grid-lines absolute inset-0" />
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Methodology"
            title={<>A six-phase, <span className="text-wing">TOGAF ADM-aligned</span> delivery plan</>}
            text="Structured around a six-month assignment with milestone-linked deliverables — from inception to a validated framework, implementation plan and trained counterparts."
          />
          <div className="mt-14">
            <PhaseTimeline />
          </div>
        </div>
      </section>

      {/* Interoperability */}
      <section className="py-24 lg:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="order-2 rounded-3xl bg-ink p-6 lg:order-1">
            <InteropHub className="w-full" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Interoperability & integration"
              title="Agencies that share data securely — by design"
              text="We define integration patterns, mechanisms and standards for heterogeneous government systems: service-oriented and event-driven architecture, API management, microservices and middleware for G2G, G2B and G2C exchange."
            />
            <Reveal delay={0.1} className="mt-8 grid gap-4 sm:grid-cols-2">
              {eaToolkit.map((g) => (
                <div key={g.group} className="rounded-2xl border border-fg/10 p-5">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-brand-orange">{g.group}</h4>
                  <ul className="mt-3 space-y-1.5 text-sm text-fg/70">
                    {g.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-muted py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Deliverables"
            title="Documents your government owns — and can act on"
            text="Every output is delivered in editable and PDF formats, validated with stakeholders and handed over in full, with all intellectual property remaining with the client."
          />
          <div className="space-y-3">
            {eaDeliverables.map((d, i) => (
              <Reveal key={d} delay={i * 0.05}>
                <div className="flex items-center gap-4 rounded-2xl bg-surface p-5">
                  <FileCheck2 className={`shrink-0 ${i % 2 ? 'text-brand-olive' : 'text-brand-orange'}`} size={22} />
                  <span className="font-medium text-fg/80">{d}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Key experts"
            title="A senior team structured for public-sector EA"
            text="Our top-heavy delivery model fields senior consultants — not inexperienced staff — with 26 person-months of key-expert input across the assignment."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {eaTeam.map((t, i) => (
              <Reveal key={t.role} delay={i * 0.08}>
                <div className="card-hover relative h-full overflow-hidden rounded-3xl bg-ink p-8 text-white">
                  <div className="rays -right-80 -top-80 opacity-60" />
                  <div className="relative flex items-start justify-between">
                    <Briefcase className="text-brand-amber" />
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">{t.months} person-months</span>
                  </div>
                  <h3 className="relative mt-6 text-2xl font-bold">{t.role}</h3>
                  <p className="relative mt-2 text-sm text-white/60">{t.focus}</p>
                  <ul className="relative mt-6 space-y-2.5 border-t border-white/10 pt-6">
                    {t.profile.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-white/80">
                        <span className="bg-wing mt-2 h-1.5 w-1.5 shrink-0 rounded-full" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-muted py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Relevant experience"
            title="Proven in public-sector and regional delivery"
            text="Our combined experience across the public sector, development partners and multinational organisations — backed by ITIL, PMP, ISO 27001 and ISO 20000 practice — equips us for complex, multi-stakeholder assignments in East Africa and similar operating environments."
          />
          {assignments.length > 0 ? (
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {assignments.map((a) => (
                <Reveal key={a.client + a.period}>
                  <div className="h-full rounded-3xl bg-surface p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-bold">{a.client}</h3>
                      <span className="text-xs font-semibold text-brand-olive">{a.period}</span>
                    </div>
                    <p className="mt-1 flex items-center gap-1 text-xs text-fg/50"><MapPin size={12} /> {a.location}</p>
                    <p className="mt-4 text-sm leading-relaxed text-fg/70">{a.scope}</p>
                    <p className="mt-4 text-sm font-semibold text-brand-orange">Contract value: {a.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                { t: 'ICT strategy & governance', d: 'Formulating ICT strategy aligned to policy, leading the demand side of ICT governance and tracking benefits realisation.' },
                { t: 'Large-scale ICT projects', d: 'Project leadership using recognised methodologies — ERP/CRM, WAN revisions, ITIL/ISO implementations and cloud migrations.' },
                { t: 'Audits & technical specifications', d: 'Independent ICT technical audits and validation of specifications by consultants with 10+ years’ experience.' },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 0.08}>
                  <div className="h-full rounded-3xl bg-surface p-7">
                    <span className="text-3xl font-extrabold text-wing">0{i + 1}</span>
                    <h3 className="mt-3 text-lg font-bold">{c.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg/60">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
          <Reveal className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink p-8 text-white sm:flex-row sm:items-center">
            <p className="max-w-2xl text-white/80">
              Full assignment references — client, scope, value and period — are included in our Expression of Interest
              and capability statement.
            </p>
            <Link href="/contact?topic=gea" className="btn-primary shrink-0">
              Request references <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            { t: 'On-the-ground delivery', d: 'Core team based at the client’s duty station for the duration of the contract, with field visits to regions for consultations and assessments.' },
            { t: 'Environmental & social standards', d: 'Activities aligned with national legislation and the World Bank Environmental and Social Framework (ESF) and ESS.' },
            { t: 'GBV / SEA / SH safeguards', d: 'Robust prevention and response measures, upholding the highest standards of ethical behaviour, protection and accountability.' },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-fg/10 p-8">
                <div className="bg-wing h-1 w-12 rounded-full" />
                <h3 className="mt-5 text-lg font-bold">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg/60">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Enterprise architecture, answered"
            text="Common questions from ministries, agencies and development partners."
          />
          <div className="space-y-3">
            {eaFaqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-surface p-6 open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-fg [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-lg text-brand-orange transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-fg/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Planning a government enterprise architecture?"
        text="Speak with our enterprise architecture team about frameworks, interoperability and digital-government roadmaps."
      />
    </>
  )
}
