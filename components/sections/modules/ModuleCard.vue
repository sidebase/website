<script setup lang="ts">
import type { PropType } from 'vue'
import type { SidebaseModule } from '~/types'

defineProps({
  module: {
    type: Object as PropType<SidebaseModule>,
    required: true,
  },
})
</script>

<template>
  <div class="conic group h-[550px] w-[400px] shadow transition-all hover:scale-105">
    <div class="animatedBorder h-full w-full rounded p-2">
      <div class="PatternBG bg-pickled-bluewood-800 h-full w-full">
        <div class="relative grid h-full w-full place-content-center px-2 text-center">
          <h1 class="text-4xl font-bold text-white">
            {{ module.title }}
          </h1>
          <p class="text-lg text-white">
            {{ module.description }}
          </p>
          <div class="flex flex-col space-y-4 px-6">
            <nuxt-link :href="module.getStartedLink" class="from-sidebase-green-800 focus:ring-sidebase-green-800 rounded-lg bg-gradient-to-r to-purple-600 px-5 pt-2 pb-2.5 text-center text-lg font-medium text-white hover:bg-gradient-to-br hover:text-white focus:outline-none focus:ring-4">
              <i class="fa fa-rocket px-1" />
              Get started
            </nuxt-link>
            <a :href="module.docsLink" target="_blank" class="rounded-lg bg-gradient-to-r from-red-600 to-blue-400 px-5 pt-2 pb-2.5 text-center text-lg font-medium text-white hover:bg-gradient-to-br hover:text-white focus:outline-none focus:ring-4 focus:ring-red-600">
              <i class="fa fa-book px-1" />
              Docs
            </a>
            <a :href="module.gitHubLink" target="_blank" class="rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 px-5 pt-2 pb-2.5 text-center text-lg font-medium text-white hover:bg-gradient-to-br hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-800">
              <i class="fa-brands fa-github px-1" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

.conic {
  position: relative;
  z-index: 0;
  overflow: hidden;
  padding: 0.3rem;
  border-radius: 10px;

  &::before {
    opacity: 0;
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(transparent, #ffffff, transparent 30%);
    animation: rotate 3s linear infinite;
    transition: opacity linear 400ms;
  }

  &:hover:before {
    opacity: 100;
  }

  &:hover:after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    border-radius: 5px;
  }
}

@keyframes opacityChange {
  50% {
    opacity:.5;
  }
  100% {
    opacity: 1;
  }
}

.animatedBorder {
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  background-size: 300% 300%;
}

.animatedBorder:hover {
  animation: animatedBorderGradient 3s ease alternate infinite;
}

@keyframes animatedBorderGradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
