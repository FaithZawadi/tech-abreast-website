import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Accessibility, AlertTriangle, ArrowRight, BadgeCheck, CheckCircle2, FileCheck2, Lock, MapPin, Network, PiggyBank, Recycle,
} from 'lucide-react'
import EALayers from '@/components/illustrations/EALayers'
import InteropHub from '@/components/illustrations/InteropHub'
import Organogram from '@/components/Organogram'
import PhaseTimeline from '@/components/PhaseTimeline'
import { CtaBand, PageHero, Reveal, SectionHeading, ServiceIcon } from '@/components/ui'
import JsonLd from '@/components/JsonLd'
import {
  assignments, eaAssurance, eaClients, eaDeliverables, eaFaqs, eaObjectives, eaOfferings, eaPitfalls, eaReferences,
  eaTeam, eaTenderFit, eaToolkit,
} from '@/lib/content'
import { accent } from '@/lib/accent'
import { breadcrumbLd, pageMeta, serviceLd } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Enterprise Architecture & Digital Government',
  description:
    'Government enterprise architecture frameworks, interoperability, digital public infrastructure, e-government roadmaps and capacity building — TOGAF-aligned and benchmarked to UN EGDI and World Bank GTMI.',
  path: '/digital-government',
})

const objectiveIcons = [Network, Lock, Accessibility, PiggyBank, Recycle]
const eifLayers = [
  { name: 'Legal', text: 'Laws, regulations and data-sharing agreements that permit and govern exchange.' },
  { name: 'Organisational', text: 'Aligned processes, responsibilities and service-level agreements between institutions.' },
  { name: 'Semantic', text: 'Shared data models, code lists and registries so data means the same thing everywhere.' },
  { name: 'Technical', text: 'Secure APIs, messaging, identity and trust services that move the data.' },
]

export default function DigitalGovernmentPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceLd({
            name: 'Enterprise Architecture & Digital Government',
            description:
              'Government enterprise architecture frameworks, interoperability, digital public infrastructure, digitisation roadmaps and capacity building.',
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
        text="We help governments and public institutions design the architecture, standards and roadmaps behind joined-up digital services — and build the capacity to sustain them."
        image="/images/industries/public-sector.jpg"
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact?topic=gea" className="btn-primary">
            Request our capability statement <ArrowRight size={16} />
          </Link>
          <a href="#tender-fit" className="btn-ghost">How we meet your ToR</a>
        </div>
      </PageHero>

      {/* Who we serve + why EA */}
      <section className="py-24 lg:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why enterprise architecture"
              title="From isolated systems to a single, citizen-centred service model"
              text="Enterprise architecture gives every institution a common language and set of standards for delivering services across agencies, an objective basis for reviewing ICT investment, and a faster, cheaper path to reliable e-services."
            />
            <Reveal delay={0.1} className="mt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-fg/50">Who we work with</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {eaClients.map((c, i) => (
                  <span key={c} className={`rounded-full px-4 py-2 text-sm font-medium ${accent(i).soft}`}>{c}</span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="rounded-3xl bg-ink p-6 sm:p-10">
            <EALayers className="w-full" />
          </Reveal>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-muted py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we deliver"
            title="Engagements we take on"
            text="From a focused maturity assessment to a full national framework, each engagement can stand alone or form part of a larger programme."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {eaOfferings.map((o, i) => (
              <Reveal key={o.title} delay={(i % 3) * 0.06}>
                <div className="card-hover group h-full rounded-3xl bg-surface p-7">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:text-white ${accent(i).soft} ${accent(i).hoverBg}`}>
                    <ServiceIcon name={o.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg/65">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading center eyebrow="Outcomes" title="Every framework we deliver is built to be…" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {eaObjectives.map((o, i) => {
              const Icon = objectiveIcons[i]
              return (
                <Reveal key={o.title} delay={i * 0.06}>
                  <div className="h-full rounded-3xl border border-fg/10 p-7 text-center">
                    <span className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full text-white ${accent(i).bg}`}>
                      <Icon size={22} strokeWidth={1.8} />
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
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Methodology"
            title={<>A six-phase, <span className="text-wing">TOGAF® ADM-aligned</span> method</>}
            text="Tailored to each client’s terms of reference, timeline and funding milestones — every phase ends in a reviewable deliverable."
          />
          <div className="mt-14">
            <PhaseTimeline />
          </div>
        </div>
      </section>

      {/* Interoperability */}
      <section className="py-24 lg:py-32">
        <div className="container-x grid items-start gap-16 lg:grid-cols-2">
          <Reveal className="order-2 rounded-3xl bg-ink p-6 lg:sticky lg:top-28 lg:order-1">
            <InteropHub className="w-full" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Interoperability & integration"
              title="Institutions that share data securely — by design"
              text="Real interoperability is more than APIs. We address all four layers, so data can flow lawfully, reliably and with the same meaning everywhere."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {eifLayers.map((l, i) => (
                <Reveal key={l.name} delay={i * 0.05}>
                  <div className="h-full rounded-2xl bg-muted p-5">
                    <span className={`text-xs font-bold uppercase tracking-widest ${accent(i).text}`}>{l.name} layer</span>
                    <p className="mt-2 text-sm leading-relaxed text-fg/70">{l.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1} className="mt-6 grid gap-4 sm:grid-cols-2">
              {eaToolkit.map((g, i) => (
                <div key={g.group} className="rounded-2xl border border-fg/10 p-5">
                  <h4 className={`text-sm font-bold uppercase tracking-widest ${accent(i).text}`}>{g.group}</h4>
                  <ul className="mt-3 space-y-1.5 text-sm text-fg/70">
                    {g.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Grounded in global and African practice */}
      <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
        <div className="grid-lines absolute inset-0" />
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Grounded in proven practice"
            title={<>Benchmarked globally, <span className="text-wing">built for Africa</span></>}
            text="We don’t invent frameworks from scratch. Our work draws on the standards, benchmarks and reference designs that governments and development partners already trust."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {eaReferences.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 0.08}>
                <div className={`h-full rounded-3xl border-l-4 bg-white/[0.04] p-8 ${i % 2 ? 'border-brand-olive' : 'border-brand-orange'}`}>
                  <h3 className="text-xl font-bold text-white">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/70">{r.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {r.tags.map((t) => (
                      <span key={t} className={`rounded-full px-3 py-1 text-xs font-semibold ${accent(i).soft}`}>{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pitfalls */}
      <section className="bg-muted py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Lessons from the field"
            title="Why architecture programmes fail — and how we prevent it"
            text="Many government frameworks are approved and never used. Our method is designed around the failure points we see most often."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {eaPitfalls.map((p, i) => (
              <Reveal key={p.risk} delay={(i % 3) * 0.06}>
                <div className="h-full overflow-hidden rounded-3xl bg-surface">
                  <div className={`flex items-center gap-3 px-6 py-4 text-white ${accent(i).bg}`}>
                    <AlertTriangle size={18} className="shrink-0" />
                    <h3 className="font-semibold">{p.risk}</h3>
                  </div>
                  <p className="flex gap-3 p-6 text-sm leading-relaxed text-fg/75">
                    <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${accent(i).text}`} /> {p.fix}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tender fit */}
      <section id="tender-fit" className="scroll-mt-20 py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Tender-ready"
            title="How we meet typical terms of reference"
            text="Enterprise architecture and digital-government tenders ask for similar things. Here is how we answer each one — and we map our proposal line by line to your ToR."
          />
          <div className="mt-12 overflow-hidden rounded-3xl border border-fg/10">
            {eaTenderFit.map((t, i) => (
              <Reveal key={t.req} delay={0.02 * i}>
                <div className={`grid gap-2 p-6 md:grid-cols-[1fr_1.4fr] md:gap-8 ${i % 2 ? 'bg-muted' : 'bg-surface'}`}>
                  <p className="flex gap-3 font-semibold">
                    <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${accent(i).bg}`} /> {t.req}
                  </p>
                  <p className="flex gap-3 text-fg/70">
                    <BadgeCheck size={20} className={`shrink-0 ${accent(i).text}`} /> {t.how}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-20 bg-muted py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Team & organisation"
            title="Clear accountability, from steering committee to counterpart"
            text="Every assignment runs through one Team Leader, backed by firm-level quality assurance, with key experts paired to client staff. The team is scaled to each assignment and presented with full CVs in our proposals."
          />
          <div className="mt-14">
            <Organogram />
          </div>
          <h3 className="mt-20 text-2xl font-bold">Key expert profiles</h3>
          <p className="mt-2 max-w-2xl text-fg/60">Our top-heavy delivery model fields senior consultants, not inexperienced staff.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {eaTeam.map((t, i) => (
              <Reveal key={t.role} delay={(i % 3) * 0.06}>
                <div className="card-hover h-full rounded-3xl bg-surface p-7">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${accent(i).soft}`}>{t.tag}</span>
                  <h3 className="mt-4 text-xl font-bold">{t.role}</h3>
                  <p className="mt-2 text-sm text-fg/60">{t.focus}</p>
                  <ul className="mt-5 space-y-2 border-t border-fg/10 pt-5">
                    {t.profile.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-fg/80">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent(i).bg}`} /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance + deliverables */}
      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Delivery assurance" title="How we protect your programme" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {eaAssurance.map((a, i) => (
                <Reveal key={a.title} delay={(i % 2) * 0.05}>
                  <div className="h-full rounded-2xl border border-fg/10 p-5">
                    <div className={`h-1 w-10 rounded-full ${accent(i).bg}`} />
                    <h3 className="mt-4 font-semibold">{a.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg/60">{a.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Deliverables" title="Documents you own — and can act on" />
            <div className="mt-10 space-y-3">
              {eaDeliverables.map((d, i) => (
                <Reveal key={d} delay={i * 0.04}>
                  <div className="flex items-center gap-4 rounded-2xl bg-muted p-4">
                    <FileCheck2 className={`shrink-0 ${accent(i).text}`} size={22} />
                    <span className="font-medium text-fg/80">{d}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience — renders verified assignments when added in lib/content.ts */}
      {assignments.length > 0 && (
        <section className="bg-muted py-24">
          <div className="container-x">
            <SectionHeading eyebrow="Relevant experience" title="Selected assignments" />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {assignments.map((a, i) => (
                <Reveal key={a.client + a.period}>
                  <div className="h-full rounded-3xl bg-surface p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-bold">{a.client}</h3>
                      <span className={`text-xs font-semibold ${accent(i).text}`}>{a.period}</span>
                    </div>
                    {a.title && <p className="mt-1 font-medium text-fg/80">{a.title}</p>}
                    <p className="mt-1 flex items-center gap-1 text-xs text-fg/50"><MapPin size={12} /> {a.location}</p>
                    {a.category && (
                      <span className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${accent(i).soft}`}>{a.category}</span>
                    )}
                    <p className="mt-4 text-sm leading-relaxed text-fg/70">{a.scope}</p>
                    {a.frameworks && a.frameworks.length > 0 && (
                      <p className="mt-3 text-xs text-fg/55">Methods: {a.frameworks.join(' · ')}</p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                      <span className={`font-semibold ${accent(i).text}`}>Contract value: {a.value}</span>
                      {a.financing && <span className="text-fg/60">Financing: {a.financing}</span>}
                      {a.role && <span className="text-fg/60">Role: {a.role}</span>}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-muted py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Enterprise architecture, answered"
            text="Common questions from ministries, agencies and development partners."
          />
          <div className="space-y-3">
            {eaFaqs.map((f, i) => (
              <details key={f.q} className="group rounded-2xl bg-surface p-6 open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-fg [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg transition-transform group-open:rotate-45 ${accent(i).soft}`}>
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
        title="Planning a digital government programme?"
        text="Share your terms of reference — we’ll show you exactly how we would deliver it, with the team, method and plan to match."
      />
    </>
  )
}
