<template>
  <section id="getting-started">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-6 sm:pt-[90px]">
      <div class="mb-8">
        <a href="#getting-started" class="group relative">
          <h1 class="text-4xl font-extrabold text-white">
            Getting started with <span class="GradientText">sidebase</span>
          </h1>
        </a>
        <p class="text-lg text-gray-400">
          Getting started with sidebase is super easy and fast! The easier way to get started is to use the official nuxi-cli to bootstrap a project based
          on sidebase.
        </p>
      </div>
      <section class="mt-5">
        <div class="py-4">
          <h1 class="text-xl text-gray-400">
            Use the official nuxi-cli to start:
          </h1>
          <div class="flex items-center rounded-lg bg-gray-700 p-3 font-mono text-lg text-white shadow-lg">
            <i class="fa fa-angle-right mr-2 text-red-400" />
            npx nuxi@latest init -t community/sidebase
          </div>
        </div>
        <div class="py-4">
          <h1 class="text-xl text-gray-400">
            Go into the nuxt-sidebase/ directory:
          </h1>
          <div class="flex items-center rounded-lg bg-gray-700 p-3 font-mono text-lg text-white shadow-lg">
            <i class="fa fa-angle-right mr-2 text-red-400" />
            cd nuxt-sidebase
          </div>
        </div>
        <div class="py-4">
          <h1 class="text-xl text-gray-400">
            Install the dependencies:
          </h1>
          <div class="flex items-center rounded-lg bg-gray-700 p-3 font-mono text-lg text-white shadow-lg">
            <i class="fa fa-angle-right mr-2 text-red-400" />
            npm install
          </div>
        </div>
        <div class="py-4">
          <h1 class="text-xl text-gray-400">
            Start developing (with database, backend, API, ... running) at <a href="http://localhost:3000" target="_blank">localhost:3000</a>:
          </h1>
          <div class="flex items-center rounded-lg bg-gray-700 p-3 font-mono text-lg text-white shadow-lg">
            <i class="fa fa-angle-right mr-2 text-red-400" />
            npm run dev
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
