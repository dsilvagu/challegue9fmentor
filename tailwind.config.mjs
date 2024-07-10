/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'inter': ['"Inter Variable"', 'sans-serif'],
				'lexend': ['"Lexend Deca Variable"', 'sans-serif']
			}
		},
		colors: {
			'pvdblue': 'hsl(233, 47%, 7%)',
			'pddblue': 'hsl(244, 38%, 16%)',
			'psviolet': 'hsl(277, 64%, 61%)',
			'pwhite': 'hsl(0, 0%, 100%)',
			'pslightly': 'hsla(0, 0%, 100%, 0.75)',
			'pstwhite': 'hsla(0, 0%, 100%, 0.6)'
		}
	},
	plugins: [],
}
