<script setup lang="ts">
import Logo from '~/assets/branding/Sidebase_logo_dark_icon_font_for_dark_bg.svg'
</script>

<template>
  <div class="w-full flex items-center justify-between lg:container mx-auto">
    <div class="w-[250px] h-[100px] overflow-hidden flex items-center justify-center">
      <Logo width="250px" height="200px" />
    </div>
    <div class="flex items-center space-x-5">
      <a class="cursor-pointer text-SideBase-green hover:text-white transition-colors text-lg font-light">
        <i class="pi pi-github pt-0.5" style="font-size: 1.25rem" />
      </a>
      <a class="cursor-pointer text-SideBase-green hover:text-white transition-colors text-lg font-light">
        <i class="pi pi-twitter pt-1" style="font-size: 1.25rem" />
      </a>
    </div>
  </div>
</template>
