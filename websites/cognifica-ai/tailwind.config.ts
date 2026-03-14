import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: '#4A7C6F',
        'sage-lt': '#6B9E90',
        'sage-dk': '#2E5449',
        cream: '#F7F3EE',
        warm: '#EDE7DC',
        sand: '#D4C9B8',
        clay: '#B07D5A',
        rust: '#8B4E2E',
        ink: '#1C2420',
        'ink-2': '#3A4A44',
        muted: '#7A8880',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-mulish)', 'system-ui', 'sans-serif'],
      },
      screens: {
        sm: '393px',
        md: '810px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
}
export default config
