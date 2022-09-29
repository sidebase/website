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
  <div data-aos="fade-up" class="transition-all hover:scale-105">
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
              <span v-if="testimonial.position" class="text-xs text-gray-400">
                {{ testimonial.position }}
              </span>
            </h1>
            <div class="mt-1 flex items-center space-x-2">
              <a v-if="testimonial.githubLink" class="hover:text-sidebase-green text-white" :href="testimonial.githubLink" target="_blank">
                <i class="fa-brands fa-github" />
              </a>
              <a v-if="testimonial.twitterLink" class="hover:text-sidebase-green text-white" :href="testimonial.twitterLink" target="_blank">
                <i class="fa-brands fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
