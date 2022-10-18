<script lang="ts" setup>
import testimonials from '~/data/testimonials'
import Testimonial from '~/components/sections/Testimonial.vue'
</script>

<template>
  <div class="mx-auto my-20 max-w-screen-xl py-8 px-4 lg:p-0">
    <div class="mb-4 text-center">
      <h1 class="mb-0 text-3xl font-bold text-gray-300">
        But...
      </h1>
      <h1 class="text-5xl font-bold text-gray-300">
        What do others think about <span class="GradientText">sidebase</span>?
      </h1>
    </div>
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

.GradientText {
  text-align: center;

  background: linear-gradient(to right, #81F6D4 20%, #12a87b 40%, #0FCF97 60%, #81F6D4 80%);
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
