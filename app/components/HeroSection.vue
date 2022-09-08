<template>
  <div class="flex items-center justify-center h-[55vh] mx-4 md:mt-0">
    <div class="flex flex-col">
      <div class="text-center">
        <img src="/Logo.png" class="h-[150px] w-[150px] md:h-[250px] md:w-[250px] mx-auto select-none">
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
          <a class="hidden md:block" href="https://github.com/sidestream-tech/sidebase/generate" target="_blank">
            <Button label="Use starter template" icon="pi pi-flag" icon-pos="left" />
          </a>
        </div>
      </div>
      <div />
    </div>
  </div>
</template>
