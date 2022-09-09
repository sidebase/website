<template>
  <div class="w-full bg-gray-800 py-12 px-4">
    <h1 class="text-4xl text-center text-gray-200">
      Contact us
    </h1>
    <div class="text-center text-gray-300 text-xl my-5">
      <p>
        Do you have any issues? Send us an email and we will respond as soon as possible!
      </p>
      <p class="mt-8">
        Alternatively, you can also reach us by telephone.
      </p>
    </div>
    <div class="flex flex-col md:flex-row items-center gap-3 w-full justify-center mt-8">
      <a href="mailto:sidebase@sidestream.tech" target="_blank">
        <Button label="Send us a message" class="p-button-outlined" icon="pi pi-envelope" icon-pos="left" />
      </a>
      <a href="https://github.com/sidestream-tech/sidebase/issues/new/choose" target="_blank">
        <Button label="Open an issue" icon="pi pi-github" icon-pos="left" />
      </a>
    </div>
  </div>
</template>
