// Hub-and-spoke interoperability diagram: agencies exchange data through a
// shared integration layer (API gateway / service bus) rather than point-to-point.

const nodes = [
  'Ministry of ICT', 'Finance & Revenue', 'Civil Registry', 'Health',
  'Education', 'Lands & Business', 'Immigration', 'Local Government',
]

export default function InteropHub({ className = '' }: { className?: string }) {
  const cx = 260
  const cy = 230
  const r = 170
  return (
    <svg viewBox="0 0 520 460" className={className} role="img" aria-label="Government agencies connected through a shared interoperability and API layer">
      <defs>
        <radialGradient id="hub-g" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#F59E2B" />
          <stop offset="1" stopColor="#F26522" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#fff" strokeOpacity=".08" />
      <circle cx={cx} cy={cy} r={r - 60} fill="none" stroke="#fff" strokeOpacity=".05" />

      {nodes.map((n, i) => {
        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2
        const x = cx + Math.cos(a) * r
        const y = cy + Math.sin(a) * r
        const color = i % 2 ? '#B7C43A' : '#F59E2B'
        return (
          <g key={n}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke={color} strokeOpacity=".7" strokeWidth="1.6" className="flow" style={{ animationDelay: `${i * 0.2}s` }} />
            <circle cx={x} cy={y} r="22" fill="#1F1D16" stroke={color} strokeWidth="2" />
            <circle cx={x} cy={y} r="6" fill={color} />
            <text
              x={x}
              y={y + (Math.sin(a) > 0.3 ? 40 : -32)}
              textAnchor="middle"
              fill="#fff"
              fontSize="12"
              opacity=".85"
            >
              {n}
            </text>
          </g>
        )
      })}

      <circle cx={cx} cy={cy} r="60" fill="url(#hub-g)" className="pulse-ring" opacity=".35" />
      <circle cx={cx} cy={cy} r="60" fill="url(#hub-g)" />
      <text x={cx} y={cy - 6} textAnchor="middle" fill="#16150F" fontSize="11.5" fontWeight="700">Interoperability</text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="#16150F" fontSize="11" fontWeight="500">API · SOA · Events</text>
    </svg>
  )
}
