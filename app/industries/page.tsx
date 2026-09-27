import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaBand, PageHero, Reveal } from '@/components/ui'
import { industries } from '@/lib/content'

export const metadata: Metadata = { title: 'Industries' }

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title={<>Technology that fits <span className="text-wing">your sector.</span></>}
        text="Our work with the public sector, multinational corporates and small businesses gives us the context to tailor the right solution for each industry."
        image="/images/industries/public-sector.jpg"
      />
      <section className="py-24">
        <div className="container-x space-y-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug}>
              <div
                id={ind.slug}
                className={`group grid scroll-mt-28 items-center overflow-hidden rounded-3xl bg-cream md:grid-cols-2 ${
                  i % 2 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:h-full md:min-h-[300px]">
                  <Image src={ind.image} alt={ind.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width:768px) 50vw, 100vw" />
                </div>
                <div className="p-8 sm:p-12">
                  <span className="text-5xl font-extrabold text-wing">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="mt-4 text-2xl font-bold sm:text-3xl">{ind.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink/65">{ind.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
