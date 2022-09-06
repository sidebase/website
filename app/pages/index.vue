<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import HeroSection from '~/components/HeroSection.vue'
import FeatureSection from '~/components/FeatureSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <HeroSection />
    <div class="flex flex-col space-y-14">
      <FeatureSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
    <Footer />
  </div>
</template>
