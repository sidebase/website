<script setup lang="ts">
import Button from 'primevue/button'
import Logo from '~/assets/branding/Sidebase_logo_dark_icon_font_for_dark_bg.svg'
</script>

<template>
  <div class="w-full flex items-center justify-between container mx-auto px-6 pt-2">
    <div class="-ml-2 w-[150px] h-[50px] lg:w-[250px] lg:h-[100px] overflow-hidden flex items-center justify-center">
      <Logo />
    </div>
    <div class="flex items-center space-x-5">
      <a href="https://github.com/sidestream-tech/sidebase" target="_blank" class="cursor-pointer text-SideBase-green hover:text-white transition-colors text-lg font-light">
        <i class="pi pi-github pt-0.5" style="font-size: 1.25rem" />
      </a>
      <a href="https://twitter.com/sidebase_io" target="_blank" class="cursor-pointer text-SideBase-green hover:text-white transition-colors text-lg font-light">
        <i class="pi pi-twitter pt-1" style="font-size: 1.25rem" />
      </a>
      <!--
      <Button class="stars p-0">
        <i class="pi pi-star-fill px-2" />
        <span class="px-3">231</span>
      </Button>
      -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.p-button.stars {
  background: linear-gradient(to left, var(--green-400) 50%, var(--green-500) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  padding: 0;
  border: 0 solid;
}
.p-button.stars:hover {
  background-position: left bottom;
}
.p-button.stars i {
  background-color: var(--green-500);
  line-height: 2.25rem;
}
.p-button.stars:focus {
  box-shadow: 0 0 0 1px var(--green-600);
}
</style>
