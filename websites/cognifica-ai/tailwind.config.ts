import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'cognifica-indigo': '#333B94',
        'cognifica-cta': '#5E89FB',
        'cognifica-submit': '#4ECFA0',
        'cognifica-accent': '#6C4DB0',
      },
      fontFamily: {
        body: ['var(--font-work-sans)', 'sans-serif'],
        heading: ['var(--font-ibm-plex-condensed)', 'sans-serif'],
        nav: ['var(--font-open-sans)', 'sans-serif'],
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
