<script lang="ts" setup>
import { onMounted } from 'vue'
import AOS from 'aos'
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

onMounted(() => {
  AOS.init()
})

useHead(metaData)
</script>

<template>
  <div class="h-full w-full">
    <Navbar />
    <Banner />
    <div class="WallpaperMeteor h-full w-full">
      <section class="to-pickled-bluewood-800 from-sidebase-green-800/30 min-h-screen bg-gradient-to-b pt-10 transition-all">
        <HeroSection />
        <TestimonialsSection />
      </section>
    </div>
    <FeaturesSection />
    <VideoSection />
    <StatsSection />
    <ContactSection />
    <Footer />
  </div>
</template>
