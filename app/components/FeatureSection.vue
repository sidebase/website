<script lang="ts" setup>
import FeatureItem from '~/components/FeatureItem.vue'
import features from '~/data/features'
</script>

<template>
  <div class="w-full my-28 px-6">
    <h1 class="text-5xl text-center text-gray-200 font-CooperHewitt">
      Features
    </h1>
    <div class="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 mt-14">
      <FeatureItem v-for="feature in features" :key="feature.title" :feature="feature" />
    </div>
  </div>
</template>
