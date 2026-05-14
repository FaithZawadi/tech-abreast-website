import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#F26522',
          green: '#22c55e',
          navy: '#020c14',
          panel: '#071520',
        },
      },
    },
  },
  plugins: [],
}
export default config
