/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'yellow-meli': '#fff159',
				'brown-meli': '#303126',
				'gray-meli': '#333',
				'background-meli': '#ebebeb'
			},
			backgroundImage: {
				'logo-large':
					"url('https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus.png')",
				'logo-small':
					"url('https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__small.png')",
				promo:
					"url('https://http2.mlstatic.com/D_NQ_840611-MLA48934732318_012022-OO.webp')"
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif']
			},
			maxWidth: {
				homescreen: '1184px'
			}
		}
	},
	plugins: []
}
