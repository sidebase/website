<script lang="ts" setup>
import { useHead } from '#head'
import HeroSection from '~/components/sections/HeroSection.vue'
import Navbar from '~/components/layout/Navbar.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import FeaturesSection from '~/components/sections/FeaturesSection.vue'
import VideoSection from '~/components/sections/VideoSection.vue'
import StatsSection from '~/components/sections/StatsSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import Footer from '~/components/layout/Footer.vue'
import Banner from '~/components/layout/Banner.vue'
import metaData from '~/data/metaData'

useHead(metaData)
</script>

<template>
  <Navbar />
  <Banner />
  <section class="to-pickled-bluewood-800 min-h-screen bg-gradient-to-b from-green-500/20 pt-10 transition-all">
    <HeroSection />
    <TestimonialsSection />
  </section>
  <FeaturesSection />
  <VideoSection />
  <StatsSection />
  <ContactSection />
  <Footer />
</template>
