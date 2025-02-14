/** @type {import('tailwindcss').Config} */
export default {
	mode:'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'main_bg': "url('/src/assets/Frame11.jpg')",
				'secondary_bg': "url('/src/assets/bg3_180.jpg')",
			  },
			animation: {
				'diagonal-move': 'diagonal-move 6s infinite',
				'diagonal-infinite-move': 'diagonal-move 4.5s infinite',
			  },
			  keyframes: {
				'diagonal-move': {
				  '0%': { transform: 'translate(0, 0)', opacity: 0 },
				  '70%': { transform: 'translate(-250vh, 250vh)', opacity: 1 }, // Hide at the end
				  '100%': {transform: 'translate(-250vh, 250vh)', opacity: 0}
				},
				'infinite-move': {
					'0%': { transform: 'translate(0, 0)', opacity: 0 },
				  	'90%': { transform: 'translate(-30000px, 30000px)', opacity: 0 }, // Hide at the end
					
				  },
			  },
			  colors: {
				'light_gray': '#B2AAB8',
				'custom-purple': '#E9C1FF',
			  }
		},

		
	},
	plugins: [],
}
