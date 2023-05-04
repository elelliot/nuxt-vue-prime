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
    // "primevue/resources/themes/lara-light-blue/theme.css",
    // "primevue/resources/themes/mdc-dark-deeppurple/theme.css",
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
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        // componentNames: {
        //   Form: 'VeeForm',
        //   Field: 'VeeField',
        //   FieldArray: 'VeeFieldArray',
        //   ErrorMessage: 'VeeErrorMessage',
        // },
      },
    ],

  ],
  build: {
    transpile: ["primevue"]
  }
})
