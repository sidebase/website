<script lang="ts">
import { defineComponent } from 'vue'
import testimonials from '~/data/testimonials'

export default defineComponent({
  data() {
    return {
      activeIndex: 0,
      displayCustom: false,
      testimonials,
    }
  },
  methods: {
    imageClick(index: number) {
      this.activeIndex = index
      this.displayCustom = true
    },
  },
})
</script>

<template>
  <div class="my-20 mx-4">
    <h1 class="text-4xl text-center text-gray-200">
      <i class="pi pi-comments text-green-400" style="font-size: 1.7rem" /> What others think <i class="pi pi-comments text-green-400" style="font-size: 1.7rem" />
    </h1>
    <div class="container mx-auto mt-5">
      <Galleria
        v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="testimonials" :num-visible="7"
        container-style="max-width: 850px" :circular="true" :full-screen="true" :show-item-navigators="true" :show-thumbnails="false"
      >
        <template #item="slotProps">
          <div>
            <img :src="slotProps.item.image" :alt="slotProps.item.name" style="width: 100%; display: block; max-height: 900px">
            <div class="my-3 w-full flex items-center justify-center">
              <Chip :label="slotProps.item.name" :image="slotProps.item.avatar" class="custom-chip" />
            </div>
          </div>
        </template>
      </Galleria>

      <div v-if="testimonials" class="grid grid-cols-5 place-content-center justify-items-center max-w-4xl mx-auto space-y-2">
        <div
          v-for="(testimonial, index) of testimonials"
          :key="index"
        >
          <img
            class="h-[125px] w-[125px] rounded-full"
            :src="testimonial.avatar"
            :alt="testimonial.name"
            style="cursor: pointer"
            @click="imageClick(index)"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.p-chip.custom-chip {
  background: var(--primary-color);
  color: var(--primary-color-text);
}
</style>
