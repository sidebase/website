<script lang="ts" setup>
import { useHead } from '#head'
import Navbar from '~/components/layout/Navbar.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import Footer from '~/components/layout/Footer.vue'
import Banner from '~/components/layout/Banner.vue'
import metaData from '~/data/metaData'
import ModuleCard from '~/components/sections/modules/ModuleCard.vue'
import ModulesHeroSection from '~/components/sections/modules/ModulesHeroSection.vue'
import modules from '~/data/modules'

useHead(metaData)
</script>

<template>
  <div class="WallpaperMeteor h-full w-full">
    <Navbar />
    <Banner />
    <div class="my-[80px]">
      <ModulesHeroSection />
      <div class="mx-auto mt-14 max-w-screen-xl">
        <div class="flex items-center justify-center space-x-8">
          <ModuleCard :module="modules[0]" />
          <div class="scale-[107%]">
            <ModuleCard :module="modules[1]" />
          </div>
          <ModuleCard :module="modules[2]" />
        </div>
      </div>
    </div>
    <ContactSection />
    <Footer />
  </div>
</template>
