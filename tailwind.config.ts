import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        meaculpa: ['var(--font-mea-culpa)'],
      },
      colors: {
        'paradise-green-200': '#c1edcc',
        'paradise-green-300': '#96dfa9',
        'paradise-green-400': '#60c87c',
        'paradise-green-600': '#2B8E46',
        'paradise-yellow-600': '#cc9002',
      },
    },
  },
  plugins: [],
}
export default config
