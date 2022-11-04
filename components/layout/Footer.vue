<script lang="ts" setup>
import SidebaseLogoDark from '~/assets/sidebase_logo_dark_just_icon_for_dark_bg.svg'
</script>

<template>
  <footer class="bg-pickled-bluewood-800 p-4 md:p-8 lg:p-10">
    <div class="mx-auto max-w-screen-xl text-center">
      <a href="https://github.com/sidestream-tech/sidebase" target="_blank" class="flex items-center justify-center text-2xl font-semibold text-white">
        <SidebaseLogoDark class="mr-3 h-8 sm:h-12" alt="sidebase logo" />
      </a>
      <p class="my-6 text-gray-400">
        A modern, best-practice, batteries-included fullstack-app starter based on Nuxt3 and TypeScript.
      </p>
      <ul class="mb-6 flex flex-wrap items-center justify-center">
        <li>
          <a href="https://www.sidestream.tech/en/imprint" target="_blank" class="hover:text-sidebase-green mr-4 text-gray-400 hover:underline md:mr-6 ">Imprint</a>
        </li>
        <li>
          <a href="https://github.com/sidebase/sidebase" target="_blank" class="hover:text-sidebase-green mr-4 text-gray-400 hover:underline md:mr-6">Github</a>
        </li>
        <li>
          <a href="https://twitter.com/sidebase_io" target="_blank" class="hover:text-sidebase-green mr-4 text-gray-400 hover:underline md:mr-6 ">Twitter</a>
        </li>
        <li>
          <a href="https://discord.gg/VzABbVsqAc" target="_blank" class="hover:text-sidebase-green mr-4 text-gray-400 hover:underline md:mr-6 ">Discord</a>
        </li>
        <li>
          <a href="https://www.sidestream.tech/en/home" target="_blank" class="hover:text-sidebase-green mr-4 text-gray-400 hover:underline md:mr-6">Sidestream</a>
        </li>
        <li>
          <a href="https://sidestream.jobs.personio.de/" target="_blank" class="hover:text-sidebase-green mr-4 text-gray-400 hover:underline md:mr-6">Jobs</a>
        </li>
        <li>
          <a href="https://www.sidestream.tech/en/contact" target="_blank" class="hover:text-sidebase-green mr-4 text-gray-400 hover:underline md:mr-6">Contact</a>
        </li>
      </ul>
      <span class="hover:text-sidebase-green text-sm text-gray-400 sm:text-center">
        Developed 2022 by
        <a href="https://www.sidestream.tech/en/home" target="_blank" class="hover:text-sidebase-green text-gray-400 underline">SIDESTREAM</a>.
      </span>
    </div>
  </footer>
</template>
