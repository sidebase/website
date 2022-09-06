import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Galleria from 'primevue/galleria'
import Chip from 'primevue/chip'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: false })
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Galleria', Galleria)
  nuxtApp.vueApp.component('Chip', Chip)
})
