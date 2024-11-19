import type { Config } from 'tailwindcss'

export default {
  content: [
    'src/**/*!(*.stories|*.spec|*.test).{ts,tsx}',
    'stories/*.stories.{ts,tsx}',
    'index.html',
  ],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('tailwindcss-react-aria-components'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark'],
  },
} satisfies Config
