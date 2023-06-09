// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  components: {
    "dirs": [
      { "path": "~/components/ContactFormComponents" },
      { "path": "~/components/FilterBarComponents" },
      "~/components"
    ]
  },
  css: [
    "@/assets/css/main.css",
    "primevue/resources/themes/viva-light/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    [
      '@vee-validate/nuxt',
      {
        autoImports: false,
      },
    ],

  ],
  build: {
    transpile: ["primevue"]
  }
})
