<script lang="ts" setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import { useHead } from '#head'
import Navbar from '~/components/layout/Navbar.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import Footer from '~/components/layout/Footer.vue'
import Banner from '~/components/layout/Banner.vue'
import metaData from '~/data/metaData'
import ModuleHeroSection from '~/components/sections/ModuleHeroSection.vue'

onMounted(() => {
  AOS.init()
})

useHead(metaData)
</script>

<template>
  <div class="h-full w-full">
    <div class="top-0 z-20 w-full lg:fixed">
      <Navbar />
    </div>
    <div class="lg:mt-[88px]">
      <Banner />
      <div class="WallpaperMeteor h-full w-full">
        <section class="to-pickled-bluewood-800 from-sidebase-green-800/30 bg-gradient-to-b transition-all">
          <ModuleHeroSection
            title="nuxt-parse"
            description="A nuxt focused package to make data validation and parsing easy. This package follows the design philosophy of the article parse, don't validate. It uses zod for parsing data from the user, APIs, your own functions, or other sources."
            install-command="npm install sidebase@nuxt-parse"
            git-hub-link="https://github.com/sidebase/nuxt-parse"
            npm-link="https://www.npmjs.com/package/@sidebase/nuxt-parse"
          />
        </section>
      </div>
      <section class="prose prose-invert mx-auto max-w-screen-xl px-4 sm:pt-[90px] lg:px-6">
        <ContentDoc />
      </section>
      <ContactSection />
      <Footer />
    </div>
  </div>
</template>
