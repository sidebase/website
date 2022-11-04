<script lang="ts">
import { defineComponent } from 'vue'
import SidebaseLogoDark from '~/assets/sidebase_logo_dark_just_icon_for_dark_bg.svg'

export default defineComponent({
  components: { SidebaseLogoDark },
  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded
    },
  },
})
</script>

<template>
  <nav class="bg-pickled-bluewood-800 px-2 py-5 shadow-xl sm:px-4 lg:py-2.5">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <nuxt-link to="/" class="flex items-center">
        <SidebaseLogoDark class="mr-3 h-8 sm:h-10" alt="sidebase logo" />
        <div class="mt-1 self-center whitespace-nowrap leading-[10px]">
          <h1 class="font-CooperHewitt text-sidebase-green-400 my-0 text-2xl font-light leading-5">
            sidebase
          </h1>
          <h2 class="text-sidebase-green-400 my-0 pl-[1px] text-xs font-light">
            by SIDESTREAM
          </h2>
        </div>
      </nuxt-link>
      <button class="ml-3 inline-flex items-center rounded-lg p-2 text-lg text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 lg:hidden" @click="toggleExpand">
        <i class="fa fa-bars" />
      </button>
      <div :class="!isExpanded ? 'hidden' : 'block'" class="w-full items-center justify-between lg:order-1 lg:flex lg:w-auto">
        <ul class="mt-4 mb-0 flex flex-col rounded-lg lg:mt-0 lg:flex-row lg:space-x-6 lg:border-0 lg:p-4 lg:text-sm lg:font-medium">
          <li>
            <nuxt-link to="/" class="border-pickled-bluewood-700 block border-b py-2 px-1 text-gray-400 hover:text-white lg:border-0 lg:px-0">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/modules" class="border-pickled-bluewood-700 block border-b py-2 px-1 text-gray-400 hover:text-white lg:border-0 lg:px-0">
              Modules
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/why" class="border-pickled-bluewood-700 block border-b py-2 px-1 text-gray-400 hover:text-white lg:border-0 lg:px-0">
              Technologies
            </nuxt-link>
          </li>
          <li class="border-pickled-bluewood-700 my-1 border-l-2" />
          <li class="flex flex-row items-center space-x-4 px-1 lg:px-0">
            <a href="https://github.com/sidestream-tech/sidebase" target="_blank" class="text-lg text-gray-400 hover:text-white">
              <i class="fa-brands fa-github" />
            </a>
            <a href="https://twitter.com/sidebase_io" target="_blank" class="text-lg text-gray-400 hover:text-white">
              <i class="fa-brands fa-twitter" />
            </a>
            <a href="https://discord.gg/VzABbVsqAc" target="_blank" class="text-lg text-gray-400 hover:text-white">
              <i class="fa-brands fa-discord" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
