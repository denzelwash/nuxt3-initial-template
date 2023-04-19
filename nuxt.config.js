// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
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
			]
		}
	},
	modules: ['@pinia/nuxt'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
                  @import "assets/scss/vars.scss";
                  @import "assets/scss/mixins.scss";
                `
				}
			}
		}
	},

	css: ['normalize.css', '@/assets/scss/main.scss']
})
