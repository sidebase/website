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
  <div class="flex flex-col space-y-4 text-center">
    <i :class="feature.icon" class="pi text-SideBase-green" style="font-size: 3rem" />
    <h1 class="text-3xl text-SideBase-green font-bold font-CooperHewitt font-light">
      {{ feature.title }}
    </h1>
    <p class="text-gray-300">
      {{ feature.description }}
    </p>
  </div>
</template>
