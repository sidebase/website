<script lang="ts" setup>
import features from '~/data/features'
import Feature from '~/components/sections/Feature.vue'
</script>

<template>
  <section class="mx-auto my-20 mt-10 max-w-screen-xl py-8 px-4 lg:p-0">
    <!--
    <div class="relative mt-4">
      <div class="absolute left-1/2 mx-auto hidden h-full w-0.5 rounded-full bg-gray-700 lg:block" />
      <div class="absolute bottom-0 hidden w-full lg:block">
        <div class="mx-auto h-0.5 w-[100px] rounded-full bg-gray-700" />
      </div>
      <div class="grid-row-auto mx-auto max-w-5xl grid-cols-2 px-3 py-10 lg:grid lg:py-20">
        <Feature :feature="features[0]" direction="right" />
        <div />
        <div />
        <Feature :feature="features[1]" direction="left" />
        <Feature :feature="features[2]" direction="right" />
        <div />
        <div />
        <Feature :feature="features[3]" direction="left" />
      </div>
    </div>
    -->
    <div class="FeaturesGrid lg:grid">
      <div>
        <Feature
          :feature="features[0]"
        />
        <Feature
          :feature="features[7]"
        />
        <Feature
          :feature="features[10]"
        />
        <Feature
          :feature="features[9]"
        />
      </div>
      <div>
        <Feature
          :feature="features[3]"
        />
        <Feature
          :feature="features[4]"
        />
        <Feature
          :feature="features[1]"
        />
        <Feature
          :feature="features[2]"
        />
      </div>
      <div>
        <Feature
          :feature="features[8]"
        />
        <Feature
          :feature="features[6]"
        />
        <Feature
          :feature="features[11]"
        />
        <Feature
          :feature="features[5]"
        />
      </div>
    </div>
    <div class="mt-8 text-center">
      <nuxt-link to="/why" class="from-sidebase-green-800 focus:ring-sidebase-green-800 rounded-lg bg-gradient-to-r via-blue-500 to-purple-600 px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-gradient-to-br hover:text-white focus:outline-none focus:ring-4">
        See more awesome features...
      </nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.FeaturesGrid {
  gap: 2rem;
  grid-template-columns: repeat(3,minmax(0,1fr));
}

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
