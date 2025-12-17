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
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',

        primary: {
          DEFAULT: '#FF6B35',
          50: '#FFF7F0',
          100: '#FFE8D9',
          200: '#FFD0B3',
          300: '#FFB38D',
          400: '#FF9667',
          500: '#FF6B35',
          600: '#E64C1A',
          700: '#CC350F',
          800: '#B32605',
          900: '#991C00',
        },
        secondary: {
          DEFAULT: '#004E89',
          50: '#E6F2FF',
          100: '#CCE4FF',
          200: '#99C9FF',
          300: '#66ADFF',
          400: '#3392FF',
          500: '#004E89',
          600: '#003D6E',
          700: '#002D53',
          800: '#001C38',
          900: '#000C1D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
