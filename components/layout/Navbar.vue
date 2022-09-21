<script lang="ts" setup>
import SidebaseLogoDark from '~/assets/sidebase_logo_dark_just_icon_for_dark_bg.svg'
</script>

<template>
  <nav class="bg-pickled-bluewood-800 px-2 py-2.5 sm:px-4">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <nuxt-link to="/" class="flex items-center">
        <SidebaseLogoDark class="mr-3 h-6 sm:h-8" alt="sidebase logo" />
        <span class="font-CooperHewitt dark:text-sidebase-green-400 self-center whitespace-nowrap pt-1 text-xl font-light">sidebase</span>
      </nuxt-link>
      <a href="https://github.com/sidestream-tech/sidebase" target="_blank" class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden">
        Github
      </a>
      <div class="hidden w-full md:block md:w-auto">
        <ul class="mt-4 mb-0 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium">
          <li>
            <nuxt-link to="/" class="block rounded py-2 pr-4 pl-3 text-gray-400 hover:text-white md:border-0 md:p-0">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/getting-started" class="block rounded py-2 pr-4 pl-3 text-gray-400 hover:text-white md:border-0 md:p-0">
              Getting started
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/why" class="block rounded py-2 pr-4 pl-3 text-gray-400 hover:text-white md:border-0 md:p-0">
              Why sidebase?
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
