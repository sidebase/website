<script setup lang="ts">
import CloseIcon from '~/assets/icons/close.svg'
</script>

<template>
  <div class="p-1">
    <h1>Form:</h1>
    <div class="mt-2">
      <h1>Nuxt link:</h1>
      <p>This is a nuxt-link, a nuxt native component that we can easily use in histoire.</p>
      <nuxt-link to="/">
        Example link to somewhere
      </nuxt-link>
    </div>
    <div class="mt-2">
      <h1>Icon:</h1>
      <p>This is a svg-icon that was imported and turned into a pseudo-component, that we can style just like any other element.</p>
      <CloseIcon class="w-24 fill-blue-200" />
    </div>
  </div>
</template>
