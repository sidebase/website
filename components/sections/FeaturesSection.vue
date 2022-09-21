<script lang="ts" setup>
import features from '~/data/features'
import Feature from '~/components/sections/Feature.vue'
</script>

<template>
  <section class="px-4">
    <h1 class="mb-0 text-center text-3xl font-bold text-gray-300">
      But...
    </h1>
    <h1 class="text-center text-5xl font-bold text-gray-300">
      What makes it <span class="AnimatedText">AMAZING</span>?
    </h1>
    <div class="relative mt-4">
      <div class="absolute left-1/2 mx-auto hidden h-full w-0.5 rounded-full bg-gray-700 lg:block" />
      <div class="absolute bottom-0 hidden w-full lg:block">
        <div class="mx-auto h-0.5 w-[100px] rounded-full bg-gray-700" />
      </div>
      <div class="grid-row-auto mx-auto max-w-5xl grid-cols-2 gap-10 px-3 py-10 lg:grid lg:py-20">
        <Feature :feature="features[0]" direction="right" />
        <div />
        <div />
        <Feature :feature="features[1]" direction="left" />
        <Feature :feature="features[2]" direction="right" />
        <div />
        <div />
        <Feature :feature="features[3]" direction="left" />
        <Feature :feature="features[4]" direction="right" />
        <div />
        <div />
        <Feature :feature="features[5]" direction="left" />
        <Feature :feature="features[6]" direction="right" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.AnimatedText {
  text-align: center;

  background: linear-gradient(to right, #eae9e9 20%, #FF0 40%, #FF0 60%, #eae9e9 80%);
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
