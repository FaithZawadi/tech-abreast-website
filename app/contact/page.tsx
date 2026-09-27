import type { Metadata } from 'next'
import { Clock, Inbox, Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { PageHero, Reveal } from '@/components/ui'
import { company } from '@/lib/content'

export const metadata: Metadata = { title: 'Contact Us' }

export default function ContactPage({ searchParams }: { searchParams: { topic?: string } }) {
  const details = [
    { icon: MapPin, label: 'Office', value: company.physical },
    { icon: Inbox, label: 'Postal address', value: company.postal },
    { icon: Phone, label: 'Telephone', value: company.phone, href: `tel:${company.phoneIntl}` },
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: Clock, label: 'Support', value: '24x7x365 for managed-service clients' },
  ]

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={<>Let’s build what’s <span className="text-wing">next.</span></>}
        text="Tell us about your organisation and what you are trying to achieve. A senior consultant — not a salesperson — will respond."
      />
      <section className="bg-cream py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.06}>
                <div className="flex gap-5 rounded-2xl bg-white p-6">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${i % 2 ? 'bg-brand-olive/15 text-brand-olive' : 'bg-brand-orange/15 text-brand-orange'}`}>
                    <d.icon size={22} />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-ink/50">{d.label}</div>
                    {d.href ? (
                      <a href={d.href} className="mt-1 block font-medium hover:text-brand-orange">{d.value}</a>
                    ) : (
                      <div className="mt-1 font-medium">{d.value}</div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <ContactForm initialTopic={searchParams.topic} />
          </Reveal>
        </div>
      </section>
      <section className="h-[420px] w-full bg-ink">
        <iframe
          title="Technology Abreast office — Birdi Complex, Mombasa Road, Nairobi"
          src="https://www.google.com/maps?q=Birdi+Complex+Mombasa+Road+Nairobi&output=embed"
          className="h-full w-full border-0 grayscale-[60%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
