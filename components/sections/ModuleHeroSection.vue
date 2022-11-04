<script lang="ts">
import { useClipboard } from '@vueuse/core'
import { defineComponent } from 'vue'
const { copy } = useClipboard()

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    installCommand: {
      type: String,
      required: true,
    },
    gitHubLink: {
      type: String,
      required: true,
    },
    npmLink: {
      type: String,
      required: true,
    },
    badge: String,
  },
  data() {
    return {
      wasCopied: false,
    }
  },
  methods: {
    copyToClipBoard() {
      copy(this.installCommand)
      this.wasCopied = true
    },
  },
})
</script>

<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-5 text-center lg:py-8">
      <div class="my-5 mx-auto max-w-xs">
        <a-popover placement="right">
          <template #content>
            <span class="text-gray-200">
              Install it now!
            </span>
          </template>
          <div class="flex">
            <button class="border-sidebase-green-800 bg-sidebase-green-800 inline-flex items-center rounded-l-md border border-r-0 px-3 text-sm text-white" @click="copyToClipBoard">
              {{ wasCopied ? 'Copied!' : 'Copy' }}
            </button>
            <input
              disabled
              type="text"
              class="border-sidebase-green-800 block w-full min-w-0 flex-1 rounded-r-lg border bg-gray-800 p-2.5 text-center text-sm text-white"
              :value="installCommand"
            >
          </div>
        </a-popover>
      </div>
      <h1 class="mb-4 flex items-center justify-center text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
        <span v-if="badge" class="bg-sidebase-green-800 mx-3 mt-3 rounded-lg px-4 py-1.5 text-sm font-normal tracking-normal text-white">
          {{ badge }}
        </span>
        {{ title }}
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-400 sm:px-16 lg:text-xl xl:px-48">
        {{ description }}
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a :href="gitHubLink" target="_blank" class="group from-sidebase-green-800 relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br to-pink-500 p-0.5 text-lg text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-800 group-hover:from-purple-500 group-hover:to-pink-500">
          <span class="relative rounded-md px-5 py-2.5 transition-all duration-200 ease-in group-hover:sm:bg-gray-800">
            <i class="fa-brands fa-github mx-1" />
            View on Github
          </span>
        </a>
        <a :href="npmLink" class="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-800 to-green-500 p-0.5 text-lg text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-800 group-hover:from-purple-500 group-hover:to-pink-500">
          <span class="relative rounded-md px-5 py-2.5 transition-all duration-200 ease-in group-hover:sm:bg-gray-800">
            <i class="fa-brands fa-npm mx-1" />
            View on NPM
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.ant-popover-inner {
  border: 1px solid rgb(11 154 113);
  background-color: rgb(31 41 55);
  border-radius: 5px;
}

.ant-popover-arrow-content {
  border: 1px solid rgb(11 154 113);
  background-color: rgb(31 41 55);
}
</style>
