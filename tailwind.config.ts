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
        "cimi-black": "#151515",
        "cimi-blue": "#1D48FF",
        "cimi-cream": "#FFF0DD",
        "cimi-green": "#00632F",
        "cimi-pink": "#FFAED9",
        "cimi-purple": "#7100C9",
        "cimi-red": "#FF4A01",
        "cimi-yellow": "#FFDF00",
      },
      fontFamily: {
        ancho: [
          "Ancho",
          "sans-serif",
        ],
        montserrat: [
          "Montserrat",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
}

export default config
