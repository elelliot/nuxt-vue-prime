// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: {
        "dirs": [
            {
              "path": "~/components/FilterBarComponents",
              
            },
            "~/components"
          ]
    },
    css: [
        "@/assets/css/main.css",
        // "primevue/resources/themes/lara-light-blue/theme.css",
        // "primevue/resources/themes/mdc-dark-deeppurple/theme.css",
        "primevue/resources/themes/viva-light/theme.css",
        "primevue/resources/primevue.css",
        "primeicons/primeicons.css",
    ],
    modules: [
        '@unocss/nuxt',
      ],
	build: {
		transpile: ["primevue"]
	}
})
