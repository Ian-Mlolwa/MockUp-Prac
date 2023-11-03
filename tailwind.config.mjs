/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			"primaryBtn-blue": "#111B47",
			"landingText": "#37447E",
			"white": "#ffffff",
			"pricingBg": "#E7ECFF",
			"textColor": "#222F65"
		},
		fontSize: {
			"50": "50px",
			"18": "18px",
			"16": "16px",
			"26": "26px"
		},
		fontFamily: {
			roboto: ["roboto"]
		},
		lineHeight: {
			"18": "18px"
		}
	},
	plugins: [],
}
