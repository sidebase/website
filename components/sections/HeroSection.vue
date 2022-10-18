<script lang="ts">
import { useClipboard } from '@vueuse/core'
import { defineComponent } from 'vue'
const { copy } = useClipboard()

export default defineComponent({
  data() {
    return {
      wasCopied: false,
    }
  },
  methods: {
    copyToClipBoard() {
      copy('npx nuxi@latest init -t community/sidebase')
      this.wasCopied = true
    },
  },
})
</script>

<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-5 text-center lg:py-8">
      <div class="my-5 mx-auto max-w-sm">
        <a-popover placement="right">
          <template #content>
            <span class="text-gray-200">
              Paste this one liner into your console!
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
              value="npx nuxi@latest init -t community/sidebase"
            >
          </div>
        </a-popover>
      </div>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
        The Nuxt3 starter for production!
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-400 sm:px-16 lg:text-xl xl:px-48">
        sidebase is a modern, best-practice, batteries-included fullstack-app starter based on Nuxt3 and TypeScript.
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href="https://github.com/sidestream-tech/sidebase" target="_blank" class="group from-sidebase-green-800 relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br to-pink-500 p-0.5 text-lg text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-800 group-hover:from-purple-500 group-hover:to-pink-500">
          <span class="relative rounded-md px-5 py-2.5 transition-all duration-200 ease-in group-hover:sm:bg-gray-800">
            <i class="fa-brands fa-github mx-1" />
            View on Github
          </span>
        </a>
        <a href="#getting-started" class="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-800 to-green-500 p-0.5 text-lg text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-800 group-hover:from-purple-500 group-hover:to-pink-500">
          <span class="relative rounded-md px-5 py-2.5 transition-all duration-200 ease-in group-hover:sm:bg-gray-800">
            <i class="fa fa-rocket mx-1" />
            Getting started
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.GradientText {
  text-align: center;

  background: linear-gradient(to right, #81F6D4 20%, #12a87b 40%, #0FCF97 60%, #81F6D4 80%);
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 1s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}
</style>

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
