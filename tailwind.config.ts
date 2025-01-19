import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default <Partial<Config>>{
  theme: {},
  content: [
    'content/**/**.md',
    'pages/**/*.{vue,js,jsx,mjs,ts,tsx}'
  ],
  plugins: [typography()],
}
