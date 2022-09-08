<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import HeroSection from '~/components/HeroSection.vue'
import FeatureSection from '~/components/FeatureSection.vue'
// import TestimonialsSection from '~/components/TestimonialsSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import Footer from '~/components/Footer.vue'
import { useHead } from '#head'

const SITE_TITLE = 'SideBase ▸ by SideStream'
const PREVIEW_IMAGE = '/Social_Preview.jpeg'
const SITE_DESCRIPTION = 'sidebase is a modern, best-practice, batteries-included fullstack-app starter based on Nuxt3 and TypeScript.'
const TWITTER_HANDLE = '@sidebase_io'

useHead({
  title: SITE_TITLE,
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: SITE_DESCRIPTION },
    { property: 'og:title', content: SITE_TITLE },
    { property: 'og:type', content: 'website' },
    { property: 'og:description', content: SITE_DESCRIPTION },
    { property: 'og:image', content: PREVIEW_IMAGE },
    { name: 'theme-color', content: '#5bf3c7' },
    { name: 'twitter:card', content: 'app' },
    { name: 'twitter:site', content: TWITTER_HANDLE },
    { name: 'twitter:title', content: SITE_TITLE },
    { name: 'twitter:description', content: SITE_DESCRIPTION },
    { name: 'twitter:image', content: PREVIEW_IMAGE },
  ],
})
</script>

<template>
  <div>
    <Navbar />
    <HeroSection />
    <div class="flex flex-col space-y-20 mt-20">
      <FeatureSection />
      <!--
      <TestimonialsSection />
      -->
      <ContactSection />
    </div>
    <Footer />
  </div>
</template>
