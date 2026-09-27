import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: { DEFAULT: '#16150F', 2: '#1F1D16', 3: '#2A281F' },
        cream: '#F7F5EF',
        brand: {
          orange: '#F26522',
          amber: '#F59E2B',
          olive: '#8B9B2A',
          lime: '#B7C43A',
        },
      },
    },
  },
  plugins: [],
}
export default config
