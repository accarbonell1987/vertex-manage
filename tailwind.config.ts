import type { Config } from 'tailwindcss';
import animatePlugin from 'tw-animate-css';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [animatePlugin],
};

export default config;
