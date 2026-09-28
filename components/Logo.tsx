import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Technology Abreast — home">
      <Image
        src="/logo-mark.png"
        alt=""
        width={243}
        height={199}
        priority
        className="h-9 w-auto transition-transform duration-500 group-hover:scale-110"
      />
      <span className="leading-none">
        <span className={`block text-[15px] font-bold tracking-[0.12em] ${dark ? 'text-fg' : 'text-white'}`}>
          TECHNOLOGY <span className="text-brand-orange">ABREAST</span>
        </span>
        <span className={`mt-1 block text-[10px] tracking-wide ${dark ? 'text-fg/60' : 'text-white/60'}`}>
          Passion and Expertise Combined
        </span>
      </span>
    </Link>
  )
}
