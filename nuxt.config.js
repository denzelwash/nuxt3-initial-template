// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Project title',
			meta: [
				{ name: 'description', content: '' },
				{ name: 'keywords', content: '' },
				{ property: 'og:locale', content: '' },
				{ property: 'og:type', content: '' },
				{ property: 'og:title', content: '' },
				{ property: 'og:description', content: '' },
				{ property: 'og:image', content: '' },
				{ property: 'og:image:width', content: '1200' },
				{ property: 'og:image:height', content: '630' }
			],
			bodyAttrs: {
				class: 'body-custom-class'
			}
		}
	},
	googleFonts: {
		display: 'swap',
		families: {
			Inter: [400]
		}
	},
	modules: ['@pinia/nuxt', '@nuxtjs/google-fonts', '@vueuse/nuxt'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: ''
				}
			}
		}
	},
	css: ['@/assets/scss/tailwind.scss', '@/assets/scss/main.scss']
})
