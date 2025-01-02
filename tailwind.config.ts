import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"cimi-cream": "#FFF0DD",
				"cimi-dark-cream": "#FFE6C5",
				"cimi-red-orange": "#FF4A01",
				"cimi-yellow": "#FFDF00",
				"cimi-green": "#00632F",
				"cimi-blue": "#1D48FF",
				"cimi-purple": "#7100C9",
				"cimi-pink": "#FFAED9",
				"cimi-black": "#151515",
			},
			fontFamily: {
				ancho: ["Ancho", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [],
}

export default config
