<script setup lang="ts">
import Logo from '~/assets/branding/SideStream_logo.svg'
</script>

<template>
  <div class="w-full flex items-center justify-between lg:container mx-auto">
    <a class="w-[250px] h-[100px] overflow-hidden flex items-center justify-center" href="https://sidestream.tech" target="_blank">
      <Logo class="fill-gray-200" width="200px" height="50px" />
    </a>
    <div class="flex items-center space-x-5">
      <a href="https://www.sidestream.tech/impressum" target="_blank" class="cursor-pointer text-SideBase-green hover:text-white transition-colors text-lg font-light">
        Imprint
      </a>
      <a class="cursor-pointer text-SideBase-green hover:text-white transition-colors text-lg font-light">
        <i class="pi pi-github pt-0.5" style="font-size: 1.25rem" />
      </a>
      <a class="cursor-pointer text-SideBase-green hover:text-white transition-colors text-lg font-light">
        <i class="pi pi-twitter pt-1" style="font-size: 1.25rem" />
      </a>
    </div>
  </div>
</template>
