<script lang="ts" setup>
import testimonials from '~/data/testimonials'
import Testimonial from '~/components/sections/Testimonial.vue'
</script>

<template>
  <div class="mx-auto max-w-screen-xl py-8 px-4 lg:p-12">
    <div class="TestimonialsGrid lg:grid">
      <div>
        <Testimonial
          :testimonial="testimonials[0]"
        />
        <Testimonial
          :testimonial="testimonials[3]"
        />
        <Testimonial
          :testimonial="testimonials[6]"
        />
      </div>
      <div>
        <Testimonial
          :testimonial="testimonials[1]"
        />
        <Testimonial
          :testimonial="testimonials[4]"
        />
        <Testimonial
          :testimonial="testimonials[7]"
        />
      </div>
      <div>
        <Testimonial
          :testimonial="testimonials[2]"
        />
        <Testimonial
          :testimonial="testimonials[5]"
        />
        <Testimonial
          :testimonial="testimonials[8]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.TestimonialsGrid {
  gap: 2rem;
  grid-template-columns: repeat(3,minmax(0,1fr));
}
</style>
