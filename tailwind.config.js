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
			'2xl': { max: '1535px' },
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '575px' }
		},
		extend: {
			colors: {
				primary: '#EA4213'
			}
		}
	},
	plugins: [],
	content: [
		`./components/**/*.{vue,js,ts}`,
		`./layouts/**/*.vue`,
		`./pages/**/*.vue`,
		`./composables/**/*.{js,ts}`,
		`./plugins/**/*.{js,ts}`,
		`./utils/**/*.{js,ts}`,
		`./App.{js,ts,vue}`,
		`./app.{js,ts,vue}`,
		`./Error.{js,ts,vue}`,
		`./error.{js,ts,vue}`,
		`./app.config.{js,ts}`
	]
}
