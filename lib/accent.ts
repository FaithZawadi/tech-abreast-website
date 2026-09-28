// Cards alternate between the two logo colours: one solid colour per card.
// Full class names are spelled out so Tailwind includes them in the build.
const orange = {
  bg: 'bg-brand-orange',
  text: 'text-brand-orange',
  soft: 'bg-brand-orange/15 text-brand-orange',
  hoverBg: 'group-hover:bg-brand-orange',
  hoverText: 'group-hover:text-brand-orange/15',
  hoverBorder: 'hover:border-brand-orange/50',
  shadow: 'shadow-brand-orange/30',
}
const green = {
  bg: 'bg-brand-olive',
  text: 'text-brand-olive',
  soft: 'bg-brand-olive/15 text-brand-olive',
  hoverBg: 'group-hover:bg-brand-olive',
  hoverText: 'group-hover:text-brand-olive/15',
  hoverBorder: 'hover:border-brand-olive/50',
  shadow: 'shadow-brand-olive/30',
}

export type Accent = typeof orange

export const accent = (i: number): Accent => (i % 2 === 0 ? orange : green)
