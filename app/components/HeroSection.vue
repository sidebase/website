<template>
  <div class="flex items-center justify-center h-[55vh]">
    <div class="flex flex-col">
      <div class="text-center">
        <div class="h-[300px] w-[300px] mx-auto">
          <client-only>
            <!-- https://assets2.lottiefiles.com/packages/lf20_eux2nl1l.json -->
            <Vue3Lottie
              animation-link="https://assets8.lottiefiles.com/packages/lf20_caltkbh1.json"
              :height="300"
              :width="300"
              :speed="0.75"
            />
          </client-only>
        </div>
        <h1 class="text-6xl md:text-8xl text-SideBase-green font-bold">
          sidebase
        </h1>
        <h2 class="text-2xl text-gray-400 font-CooperHewitt font-light">
          sidebase is a modern, best-practice, batteries-included <br>
          fullstack-app starter based on <a href="https://v3.nuxtjs.org/" target="_blank" class="text-SideBase-green underline">Nuxt3</a> and <a href="https://www.typescriptlang.org/" target="_blank" class="text-SideBase-green underline">TypeScript.</a>
        </h2>
        <div class="flex items-center gap-3 w-full justify-center mt-8">
          <a href="https://github.com/sidestream-tech/sidebase" target="_blank">
            <Button label="Star on Github" class="p-button-outlined" icon="pi pi-star" icon-pos="left" />
          </a>
          <a href="https://github.com/sidestream-tech/sidebase/generate" target="_blank">
            <Button label="Use starter template" icon="pi pi-flag" icon-pos="left" />
          </a>
        </div>
      </div>
      <div />
    </div>
  </div>
</template>
