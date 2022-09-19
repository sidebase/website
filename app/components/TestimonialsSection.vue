<script lang="ts" setup>
import Carousel from 'primevue/carousel'
import Avatar from 'primevue/avatar'
import testimonials from '~/data/testimonials'
</script>

<template>
  <div class="hidden lg:block max-w-6xl mx-auto">
    <Carousel :value="testimonials" :num-visible="1" :num-scroll="1" :circular="true">
      <template #item="slotProps">
        <div class="w-full py-10">
          <div class="text-center py-6 text-xl lg:text-2xl text-SideBase-green">
            "{{ slotProps.data.text }}"
          </div>
          <div class="flex items-center space-x-3 mx-auto w-max">
            <Avatar :image="slotProps.data.avatar" size="large" shape="circle" />
            <div>
              <h1 class="font-bold text-lg">
                {{ slotProps.data.name }}
                <a v-if="slotProps.data.link" class="font-bold underline text-SideBase-green ml-0.5 pt-2" :href="slotProps.data.link" target="_blank">
                  <i class="pi pi-twitter" style="font-size: 1.1rem" />
                </a>
              </h1>
              <p class="text-sm opacity-75">
                {{ slotProps.data.position }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>
