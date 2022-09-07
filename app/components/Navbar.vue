<script setup lang="ts">
import Logo from '~/assets/branding/Sidebase_logo_dark_icon_font_for_dark_bg.svg'
</script>

<template>
  <div class="w-full flex items-center justify-between container mx-auto px-4 pt-2">
    <div class="w-[200px] h-[50px] lg:w-[250px] lg:h-[100px] overflow-hidden flex items-center justify-center">
      <Logo />
    </div>
    <div class="flex items-center space-x-5">
      <a href="https://github.com/sidestream-tech/sidebase" target="_blank" class="cursor-pointer text-SideBase-green hover:text-white transition-colors text-lg font-light">
        <i class="pi pi-github pt-0.5" style="font-size: 1.25rem" />
      </a>
      <a href="https://twitter.com/sidebase_io" target="_blank" class="cursor-pointer text-SideBase-green hover:text-white transition-colors text-lg font-light">
        <i class="pi pi-twitter pt-1" style="font-size: 1.25rem" />
      </a>
    </div>
  </div>
</template>
