import { defineNuxtConfig } from 'nuxt'
import { isProduction } from './helpers'

// Needed to keep `ant-design-vue` running as of latest RC.8, see https://github.com/nuxt/framework/issues/6941#issuecomment-1229739856
const transpile = ['lodash-es']
if (isProduction) {
  // For production build via rollup, we need to also transpile babel
  transpile.push('@babel/runtime')
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    'primevue/resources/themes/lara-light-teal/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'vue3-lottie/dist/style.css',
    '~/assets/globals.css',
  ],
  typescript: {
    // We enable `Volar Takeover Mode`, so we can disable the shim `*.vue` generation
    // see https://v3.nuxtjs.org/getting-started/introduction#prerequisites
    shim: false,
    strict: true,
  },
  build: {
    transpile: ['primevue'],
  },
  modules: ['@nuxtjs/tailwindcss'],
})
