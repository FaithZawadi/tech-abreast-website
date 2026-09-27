import type { Metadata } from 'next'
import ServicesExplorer from '@/components/ServicesExplorer'
import { CtaBand, PageHero } from '@/components/ui'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'ICT Services & Solutions',
  description:
    'Managed ICT services, strategic consultancy, enterprise architecture, cybersecurity, disaster recovery, software & AI, BI, VoIP and more from Technology Abreast, Nairobi.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & solutions"
        title={<>A full spectrum of <span className="text-wing">ICT expertise.</span></>}
        text="From strategy, architecture and governance to managed operations, security and data — organised around our core services and complementary solutions."
      />
      <section className="bg-cream py-24">
        <div className="container-x">
          <ServicesExplorer />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
