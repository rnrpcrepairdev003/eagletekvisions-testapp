import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#1c1c1c',
          surface: '#222222',
          card: '#2a2a2a',
          border: '#333333',
          orange: '#e87c5a',
          'orange-hover': '#d06848',
          muted: '#aaaaaa',
          subtle: '#888888',
          light: '#d0d0d0',
        },
      },
    },
  },
  plugins: [],
}
export default config
