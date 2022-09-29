<script setup lang="ts">
import type { PropType } from 'vue'
import type { Feature } from '~/types'
defineProps({
  feature: {
    type: Object as PropType<Feature>,
    required: true,
  },
})
</script>

<template>
  <div class="my-4 transition-all hover:scale-105">
    <div class="group from-sidebase-green-400 relative overflow-hidden rounded bg-gradient-to-tr to-purple-700 p-0.5">
      <div class="flex items-center gap-4 bg-gray-800 px-5 pb-2 pt-5 text-white">
        <div class="from-sidebase-green-800/50 mb-4 flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gradient-to-br to-purple-700/50">
          <i class="fa text-xl text-white" :class="feature.icon" />
        </div>
        <div>
          <p class="text-sidebase-green-400 text-lg">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
