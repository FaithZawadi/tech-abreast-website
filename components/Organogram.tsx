import { ArrowLeftRight, Building2, Crown, GraduationCap, Handshake, ShieldCheck, Users } from 'lucide-react'
import { Reveal } from './ui'
import { eaOrganogram as org } from '@/lib/content'
import { accent } from '@/lib/accent'

const Stub = ({ dashed = false, className = '' }: { dashed?: boolean; className?: string }) => (
  <div aria-hidden className={`mx-auto h-8 w-0 border-l-2 ${dashed ? 'border-dashed border-fg/25' : 'border-fg/20'} ${className}`} />
)

function Side({ icon: Icon, title, text, tone }: { icon: typeof Crown; title: string; text: string; tone: number }) {
  return (
    <div className="rounded-2xl border border-dashed border-fg/20 bg-surface p-5">
      <div className="flex items-center gap-3">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${accent(tone).soft}`}>
          <Icon size={18} />
        </span>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-fg/60">{text}</p>
    </div>
  )
}

export default function Organogram() {
  return (
    <figure className="rounded-3xl bg-surface p-6 sm:p-10" aria-labelledby="organogram-caption">
      {/* Client governance */}
      <Reveal className="mx-auto max-w-xl">
        <div className="rounded-2xl bg-ink p-6 text-center text-white">
          <Building2 className="mx-auto text-brand-amber" size={22} />
          <h4 className="mt-2 text-lg font-bold">{org.client.title}</h4>
          <p className="mt-1 text-sm text-white/65">{org.client.text}</p>
        </div>
      </Reveal>
      <Stub />

      {/* Leadership row */}
      <div className="grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
        <Reveal delay={0.05} className="order-2 lg:order-1 lg:pr-0">
          <div className="flex items-center">
            <div className="flex-1"><Side icon={ShieldCheck} title={org.director.title} text={org.director.text} tone={1} /></div>
            <div aria-hidden className="hidden w-10 border-t-2 border-dashed border-fg/25 lg:block" />
          </div>
        </Reveal>
        <Reveal className="order-1 lg:order-2">
          <div className="mx-auto max-w-xs rounded-2xl bg-brand-orange p-6 text-center text-white shadow-xl shadow-brand-orange/25">
            <Crown className="mx-auto" size={22} />
            <h4 className="mt-2 text-xl font-bold">{org.leader.title}</h4>
            <p className="mt-1 text-sm text-white/85">{org.leader.text}</p>
          </div>
        </Reveal>
        <Reveal delay={0.05} className="order-3">
          <div className="flex items-center">
            <div aria-hidden className="hidden w-10 border-t-2 border-dashed border-fg/25 lg:block" />
            <div className="flex-1"><Side icon={Handshake} title={org.partner.title} text={org.partner.text} tone={0} /></div>
          </div>
        </Reveal>
      </div>
      <Stub />

      {/* Core key experts */}
      <div className="relative">
        <div aria-hidden className="absolute left-[12.5%] right-[12.5%] top-0 hidden border-t-2 border-fg/20 lg:block" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {org.core.map((role, i) => (
            <Reveal key={role} delay={i * 0.06} className="flex flex-col">
              <Stub className="hidden !h-6 lg:block" />
              <div className={`flex-1 rounded-2xl border-t-4 bg-muted p-5 text-center ${i % 2 ? 'border-brand-olive' : 'border-brand-orange'}`}>
                <span className={`text-[11px] font-bold uppercase tracking-widest ${accent(i).text}`}>Key expert</span>
                <h4 className="mt-1.5 font-semibold leading-snug">{role}</h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Stub />

      {/* Support layer */}
      <Reveal>
        <div className="grid gap-4 rounded-2xl border border-fg/10 p-5 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8">
          <div className="flex items-center gap-3">
            <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${accent(1).soft}`}><GraduationCap size={18} /></span>
            <h4 className="font-semibold">{org.support.lead}</h4>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-fg/45">Non-key experts, drawn in as the scope requires</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {org.support.pool.map((p, i) => (
                <span key={p} className={`rounded-full px-3 py-1 text-xs font-semibold ${accent(i).soft}`}>{p}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-fg/60">
            <Users size={16} className="text-brand-olive" /> {org.support.admin}
          </div>
        </div>
      </Reveal>
      <div aria-hidden className="mx-auto flex h-10 items-center justify-center text-fg/30"><ArrowLeftRight className="rotate-90" size={18} /></div>

      {/* Client counterparts */}
      <Reveal>
        <div className="rounded-2xl border-2 border-dashed border-brand-olive/40 p-5 text-center">
          <h4 className="font-semibold text-brand-olive">{org.counterparts.title}</h4>
          <p className="mx-auto mt-1 max-w-2xl text-sm text-fg/60">{org.counterparts.text}</p>
        </div>
      </Reveal>

      <figcaption id="organogram-caption" className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-fg/55">
        <span className="flex items-center gap-2"><span className="w-6 border-t-2 border-fg/30" /> Reporting line</span>
        <span className="flex items-center gap-2"><span className="w-6 border-t-2 border-dashed border-fg/30" /> Quality, coordination &amp; liaison</span>
        <span>Structure scales to each assignment’s terms of reference.</span>
      </figcaption>
    </figure>
  )
}
