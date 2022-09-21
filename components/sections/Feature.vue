<script setup lang="ts">
import type { PropType } from 'vue'
import type { Feature } from '~/types'
defineProps({
  feature: {
    type: Object as PropType<Feature>,
    required: true,
  },
  direction: {
    type: String,
    default: 'right',
  },
})
</script>

<template>
  <div :data-aos="direction === 'left' ? 'fade-left' : 'fade-right'" :class="direction === 'left' ? 'lg:border-l-8' : 'lg:border-r-8'" class="my-4 w-full rounded-lg border-yellow-600 bg-gray-800 px-5 py-8 lg:my-0">
    <h1 class="text-2xl font-bold text-gray-300">
      <i class="fa mr-1" :class="feature.icon" />
      {{ feature.title }}
    </h1>
    <p class="mt-4 text-gray-400">
      {{ feature.description }}
    </p>
  </div>
</template>
