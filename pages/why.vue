<script lang="ts" setup>
import { useHead } from '#head'
import Navbar from '~/components/layout/Navbar.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import Footer from '~/components/layout/Footer.vue'
import Banner from '~/components/layout/Banner.vue'
import metaData from '~/data/metaData'
import WhySection from '~/components/sections/WhySection.vue'

useHead(metaData)
</script>

<template>
  <div class="WallpaperShiny h-full w-full">
    <Navbar />
    <Banner />
    <WhySection />
    <ContactSection />
    <Footer />
  </div>
</template>
