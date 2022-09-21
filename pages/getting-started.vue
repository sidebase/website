<script lang="ts" setup>
import { useHead } from '#head'
import Navbar from '~/components/layout/Navbar.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import Footer from '~/components/layout/Footer.vue'
import Banner from '~/components/layout/Banner.vue'
import metaData from '~/data/metaData'
import GettingStartedSection from '~/components/docs/GettingStartedSection.vue'
import CommandsSection from '~/components/docs/CommandsSection.vue'

useHead(metaData)
</script>

<template>
  <div class="WallpaperLight h-full w-full">
    <Navbar />
    <Banner />
    <GettingStartedSection class="sm:pt-10" />
    <CommandsSection />
    <ContactSection />
    <Footer />
  </div>
</template>
