export default {
	theme: {
		container: {
			center: true,
			padding: '1rem'
		},
		fontFamily: {
			primary: ['Inter', 'Arial', 'sans-serif']
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		extend: {
			colors: {
				primary: '#EA4213'
			}
		}
	},
	plugins: [],
	content: [
		`@/components/**/*.{vue,js,ts}`,
		`@/layouts/**/*.vue`,
		`@/pages/**/*.vue`,
		`@/composables/**/*.{js,ts}`,
		`@/plugins/**/*.{js,ts}`,
		`@/utils/**/*.{js,ts}`,
		`@/App.{js,ts,vue}`,
		`@/app.{js,ts,vue}`,
		`@/Error.{js,ts,vue}`,
		`@/error.{js,ts,vue}`,
		`@/app.config.{js,ts}`
	],
	prefix: 'tw-'
}
