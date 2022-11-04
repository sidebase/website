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
            title="nuxt-auth"
            badge="Beta"
            description="Nuxt user authentication and sessions via NextAuth.js. nuxt-auth wraps NextAuth.js to offer the reliability & convenience of a 12k star library to the nuxt 3 ecosystem with a native developer experience (DX)."
            install-command="npm i -D sidebase@nuxt-auth"
            git-hub-link="https://github.com/sidebase/nuxt-auth"
            npm-link="https://www.npmjs.com/package/@sidebase/nuxt-auth"
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
