<script lang="ts" setup>
import { useHead } from '#head'
import Navbar from '~/components/layout/Navbar.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import Footer from '~/components/layout/Footer.vue'
import Banner from '~/components/layout/Banner.vue'
import metaData from '~/data/metaData'

useHead(metaData)
</script>

<template>
  <div class="WallpaperShiny h-full w-full">
    <Navbar />
    <Banner />
    <main class="prose prose-invert mx-auto min-h-[35.5vh] max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6">
      <ContentDoc>
        <template #not-found>
          <div class="text-center">
            <h1>404: Page not found</h1>
            <p>
              We tried our best but the requested page could not be found. Would you like to <nuxt-link href="/">
                return to home?
              </nuxt-link>
            </p>
          </div>
        </template>
      </ContentDoc>
    </main>
    <ContactSection />
    <Footer />
  </div>
</template>
