<script setup lang="ts">
import type { PropType } from 'vue'
import type { Testimonial } from '~/types'
defineProps({
  testimonial: {
    type: Object as PropType<Testimonial>,
    required: true,
  },
})
</script>

<template>
  <div class="group relative my-4 overflow-hidden rounded bg-gradient-to-br from-green-500 to-pink-500 p-0.5 transition-all hover:scale-105">
    <div class="w-full bg-gray-800 p-5 text-white">
      <p class="text-sidebase-green-400 py-3">
        "{{ testimonial.text }}"
      </p>
      <div class="flex w-full items-center space-x-3">
        <img
          :src="testimonial.avatar"
          class="ring-sidebase-green-800 h-14 w-14 rounded-full p-1 ring-2"
          alt="Bordered avatar"
        >
        <div>
          <h1 class="text-lg text-gray-100">
            {{ testimonial.name }}
          </h1>
          <h2 v-if="testimonial.position" class="text-sm text-gray-400">
            {{ testimonial.position }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
