'use client'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark'|'light'>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('ta-theme') as 'dark'|'light'|null
    const initial = saved || 'dark'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('ta-theme', next)
  }

  return (
    <button
      onClick={toggle}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '36px', height: '36px', borderRadius: '8px', cursor: 'pointer',
        background: theme === 'dark' ? '#1a1a10' : '#f0f0e8',
        border: `1px solid ${theme === 'dark' ? 'rgba(139,155,42,0.4)' : 'rgba(139,155,42,0.3)'}`,
        color: theme === 'dark' ? '#8B9B2A' : '#5a5a2a',
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--orange)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(139,155,42,0.4)' : 'rgba(139,155,42,0.3)'}
    >
      {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  )
}
