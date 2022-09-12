<script setup lang="ts">
import { useHead } from '#head'
import { metaData } from '~/data/metadata'
import Navbar from '~/components/layout/Navbar.vue'
import HeroSection from '~/components/HeroSection.vue'
import FeatureSection from '~/components/FeatureSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import Footer from '~/components/layout/Footer.vue'
import Banner from '~/components/layout/Banner.vue'

useHead(metaData)
</script>

<template>
  <div>
    <Banner />
    <Navbar />
    <HeroSection />
    <div class="flex flex-col space-y-20 mt-20">
      <FeatureSection />
      <ContactSection />
    </div>
    <Footer />
  </div>
</template>
