import type { Metadata } from 'next'
import Image from 'next/image'
import { Eye, Target } from 'lucide-react'
import { CtaBand, Marquee, PageHero, Reveal, SectionHeading } from '@/components/ui'
import { certifications, values, whyUs } from '@/lib/content'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'About Us',
  description:
    'Technology Abreast is a Kenyan ICT company putting people before technology — ITIL, PMP, CCNA and security-certified consultants delivering ICT strategy, managed services and digital solutions.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>People before <span className="text-wing">technology.</span></>}
        text="A registered ICT company in Kenya with a passionate team of young and experienced professionals, making our clients’ ICT environments work for their business."
      />

      <section className="py-24 lg:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our story" title="Solving ICT challenges, from the ground up" />
            <Reveal delay={0.1} className="mt-8 space-y-5 leading-relaxed text-fg/70">
              <p>
                With diversified and distributed personnel capabilities across ICT fields, we offer customised solutions
                to every client we serve — from formulating and leading ICT strategy in line with policies, processes and
                procedures, to defining ICT performance metrics and measuring, tracking and reporting on benefits
                realisation.
              </p>
              <p>
                We anticipate business needs and propose ICT products and services to fulfil them, leading the demand
                side of ICT governance on our clients’ behalf. We plan and lead clients through their ICT plans, create
                awareness within functional departments, and provide project-management leadership using recognised
                methodologies.
              </p>
              <p>
                We have grown an expansive portfolio of satisfied clients across the public sector, multinational
                corporates and small businesses — supported from the ground up.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image src="/images/team.jpg" alt="Technology Abreast team" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
            </div>
            <div className="bg-wing absolute -left-4 -top-4 -z-10 h-full w-full rounded-3xl opacity-80" />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            { icon: Eye, label: 'Our Vision', text: 'Digital Business Enablers — a powerhouse in offering unique and workable ICT solutions, enabling our clients on digital platforms and adding value to their business processes.', color: 'text-brand-orange' },
            { icon: Target, label: 'Our Mission', text: 'To passionately offer unique, workable and reliable ICT services in Managed ICT Services, Strategic and Technical Consultancy, Business Intelligence, Domain Services, Social Media Management, Risk & Security Audits, ICT Governance, and Business Software & Automation.', color: 'text-brand-lime' },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-10">
                <b.icon className={`h-10 w-10 ${b.color}`} strokeWidth={1.5} />
                <h3 className="mt-6 text-2xl font-bold text-white">{b.label}</h3>
                <p className="mt-4 leading-relaxed text-white/70">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading center eyebrow="Core values" title="What we stand for" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="card-hover group h-full rounded-3xl border border-fg/10 p-7 text-center">
                  <div className="bg-wing mx-auto flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-ink">
                    {v.title[0]}
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg/60">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="Why choose us" title="Global experience, local understanding" />
          <div className="grid gap-4">
            {whyUs.map((w, i) => (
              <Reveal key={w} delay={i * 0.07}>
                <div className="flex items-center gap-5 rounded-2xl bg-surface p-6">
                  <span className="text-3xl font-extrabold text-wing">0{i + 1}</span>
                  <span className="font-medium text-fg/80">{w}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x mb-8 text-center">
          <span className="eyebrow text-brand-olive">Certifications held across our team</span>
        </div>
        <Marquee items={certifications} />
      </section>

      <CtaBand />
    </>
  )
}
