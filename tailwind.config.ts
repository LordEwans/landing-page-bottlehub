/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './svelte.config.{js,ts}'],
	theme: {
		extend: {
			animation: {
				border: 'border 9s ease infinite'
			},
			keyframes: {
				border: {
					'0%, 100%': { backgroundPosition: '0% 70%' },
					'70%': { backgroundPosition: '100% 30%' }
				}
			}
		}
	},
	plugins: [require('daisyui')]
};
