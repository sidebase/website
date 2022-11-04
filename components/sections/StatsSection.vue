<script lang="ts" setup>
function getWeeksDiff(startDate: Date, endDate: Date) {
  const msInWeek = 1000 * 60 * 60 * 24 * 7

  return Math.round(Math.abs(endDate.getTime() - startDate.getTime()) / msInWeek)
}

const weeksPassed = getWeeksDiff(new Date('2022-09-01T00:00:00'), new Date())
</script>

<template>
  <section class="mt-14 hidden lg:block">
    <h2 class="mb-0 text-center text-3xl font-bold text-gray-300">
      And we only launched
    </h2>
    <h1 class="text-center text-5xl font-bold text-gray-300">
      {{ weeksPassed }} weeks ago!
    </h1>
    <div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16 lg:px-6">
      <dl class="mx-auto grid max-w-screen-md gap-8 text-white sm:grid-cols-3">
        <div data-aos="fade-up-right" class="flex flex-col items-center justify-center">
          <dt class="mb-2 text-3xl font-extrabold md:text-4xl">
            375+
          </dt>
          <dd class="font-light text-gray-400">
            stars
          </dd>
        </div>
        <div data-aos="fade-up" class="flex flex-col items-center justify-center">
          <dt class="mb-2 text-3xl font-extrabold md:text-4xl">
            10+
          </dt>
          <dd class="font-light text-gray-400">
            contributors
          </dd>
        </div>
        <div data-aos="fade-up-left" class="flex flex-col items-center justify-center">
          <dt class="mb-2 text-3xl font-extrabold md:text-4xl">
            116+
          </dt>
          <dd class="font-light text-gray-400">
            followers
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
