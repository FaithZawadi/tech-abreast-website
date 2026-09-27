// Isometric stack of the four TOGAF architecture domains, wrapped by a
// security & governance column. Pure SVG so it stays crisp and themeable.

const layers = [
  { label: 'Business Architecture', sub: 'Services · processes · one-stop shops', from: '#F26522', to: '#F59E2B' },
  { label: 'Data Architecture', sub: 'Registries · exchange · privacy', from: '#F59E2B', to: '#D9A62E' },
  { label: 'Application Architecture', sub: 'Shared platforms · APIs · SOA', from: '#B7C43A', to: '#9FAE2F' },
  { label: 'Technology Architecture', sub: 'Data centre · network · cloud', from: '#8B9B2A', to: '#6D7A20' },
]

export default function EALayers({ className = '' }: { className?: string }) {
  const W = 560
  const top = 40
  const gap = 78
  return (
    <svg viewBox={`0 0 ${W} 460`} className={className} role="img" aria-label="Enterprise architecture layers: business, data, application and technology, with security and governance across all layers">
      <defs>
        {layers.map((l, i) => (
          <linearGradient key={i} id={`ea-g${i}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor={l.from} />
            <stop offset="1" stopColor={l.to} />
          </linearGradient>
        ))}
        <linearGradient id="ea-sec" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F26522" stopOpacity=".9" />
          <stop offset="1" stopColor="#8B9B2A" stopOpacity=".9" />
        </linearGradient>
      </defs>

      {/* security & governance column */}
      <rect x="470" y={top} width="56" height={gap * 3 + 90} rx="14" fill="url(#ea-sec)" opacity=".18" />
      <rect x="470" y={top} width="56" height={gap * 3 + 90} rx="14" fill="none" stroke="url(#ea-sec)" strokeWidth="2" />
      <text x="498" y={top + (gap * 3 + 90) / 2} transform={`rotate(-90 498 ${top + (gap * 3 + 90) / 2})`} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600" letterSpacing="2">
        SECURITY · GOVERNANCE · STANDARDS
      </text>

      {layers.map((l, i) => {
        const y = top + i * gap
        // isometric plane
        const pts = `40,${y + 30} 230,${y} 440,${y + 30} 250,${y + 62}`
        return (
          <g key={l.label} style={{ animation: `fadeLayer .8s ${0.15 * i}s both` }}>
            <polygon points={pts} fill={`url(#ea-g${i})`} opacity=".95" />
            <polygon points={`40,${y + 30} 250,${y + 62} 250,${y + 72} 40,${y + 40}`} fill="#000" opacity=".35" />
            <polygon points={`250,${y + 62} 440,${y + 30} 440,${y + 40} 250,${y + 72}`} fill="#000" opacity=".5" />
            <text x="240" y={y + 30} textAnchor="middle" fill="#16150F" fontSize="15" fontWeight="700">
              {l.label}
            </text>
            <text x="240" y={y + 47} textAnchor="middle" fill="#16150F" fontSize="11" opacity=".75">
              {l.sub}
            </text>
            {/* connector to security column */}
            <line x1="440" y1={y + 34} x2="470" y2={y + 34} stroke={l.from} strokeWidth="2" className="flow" />
          </g>
        )
      })}

      {/* citizens on top */}
      <g>
        <circle cx="240" cy="18" r="6" fill="#F26522" />
        <circle cx="240" cy="18" r="6" fill="#F26522" className="pulse-ring" />
        <text x="256" y="22" fill="#fff" fontSize="12" opacity=".8">Citizens · Businesses · Government</text>
      </g>
      <style>{`@keyframes fadeLayer{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}`}</style>
    </svg>
  )
}
