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
      <h1>Test</h1>
      <p>This is a demo blog entrance. The final product will result in pages filled with real text!</p>
      <p>
        Etiam vestibulum nibh purus. Curabitur lorem massa, placerat eu ipsum vel, finibus ultrices est. Donec ullamcorper hendrerit neque et ullamcorper. Morbi facilisis risus in lectus auctor, eget consectetur neque faucibus. Donec nulla erat, tempor nec dui volutpat, consectetur congue erat. Morbi vulputate, sapien sed dignissim dapibus, purus felis convallis tortor, in maximus ex nisl non justo. Suspendisse potenti. Phasellus sed leo turpis.

        Morbi sit amet quam tempor sapien finibus porta sit amet at neque. Nunc ultricies vulputate gravida. Etiam ut nulla venenatis, dignissim nisi non, elementum mauris. Morbi cursus, ipsum eget aliquet mollis, enim lectus mollis sapien, sed cursus augue elit at orci. Sed cursus suscipit diam, a scelerisque lectus malesuada vel. Nulla malesuada et risus vel porttitor. In feugiat faucibus metus quis interdum. Nulla a nisi in nisl luctus facilisis vitae eget erat. Praesent fermentum molestie ipsum, nec pretium lectus venenatis vitae. Integer scelerisque interdum nunc eget luctus.
      </p>
      <p>
        Etiam vestibulum nibh purus. Curabitur lorem massa, placerat eu ipsum vel, finibus ultrices est. Donec ullamcorper hendrerit neque et ullamcorper. Morbi facilisis risus in lectus auctor, eget consectetur neque faucibus. Donec nulla erat, tempor nec dui volutpat, consectetur congue erat. Morbi vulputate, sapien sed dignissim dapibus, purus felis convallis tortor, in maximus ex nisl non justo. Suspendisse potenti. Phasellus sed leo turpis.

        Morbi sit amet quam tempor sapien finibus porta sit amet at neque. Nunc ultricies vulputate gravida. Etiam ut nulla venenatis, dignissim nisi non, elementum mauris. Morbi cursus, ipsum eget aliquet mollis, enim lectus mollis sapien, sed cursus augue elit at orci. Sed cursus suscipit diam, a scelerisque lectus malesuada vel. Nulla malesuada et risus vel porttitor. In feugiat faucibus metus quis interdum. Nulla a nisi in nisl luctus facilisis vitae eget erat. Praesent fermentum molestie ipsum, nec pretium lectus venenatis vitae. Integer scelerisque interdum nunc eget luctus.
      </p>
      <p>
        Etiam vestibulum nibh purus. Curabitur lorem massa, placerat eu ipsum vel, finibus ultrices est. Donec ullamcorper hendrerit neque et ullamcorper. Morbi facilisis risus in lectus auctor, eget consectetur neque faucibus. Donec nulla erat, tempor nec dui volutpat, consectetur congue erat. Morbi vulputate, sapien sed dignissim dapibus, purus felis convallis tortor, in maximus ex nisl non justo. Suspendisse potenti. Phasellus sed leo turpis.

        Morbi sit amet quam tempor sapien finibus porta sit amet at neque. Nunc ultricies vulputate gravida. Etiam ut nulla venenatis, dignissim nisi non, elementum mauris. Morbi cursus, ipsum eget aliquet mollis, enim lectus mollis sapien, sed cursus augue elit at orci. Sed cursus suscipit diam, a scelerisque lectus malesuada vel. Nulla malesuada et risus vel porttitor. In feugiat faucibus metus quis interdum. Nulla a nisi in nisl luctus facilisis vitae eget erat. Praesent fermentum molestie ipsum, nec pretium lectus venenatis vitae. Integer scelerisque interdum nunc eget luctus.
      </p>
    </main>
    <ContactSection />
    <Footer />
  </div>
</template>
