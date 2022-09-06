<template>
  <div class="w-full bg-gray-800/80 py-12">
    <h1 class="text-4xl text-center text-gray-200">
      Contact Us
    </h1>
    <div class="text-center text-gray-300 text-xl my-5">
      <p>
        Do you have an issue, question or feature request?<br>
        Feel free to open a new issue in our repository!
      </p>
      <p class="mt-8">
        Alternatively, you can also reach us through our email address.
      </p>
    </div>
    <div class="flex items-center gap-3 w-full justify-center mt-8">
      <a href="https://www.sidestream.tech/en/contact" target="_blank">
        <Button label="Send us a message" class="p-button-outlined" icon="pi pi-envelope" icon-pos="left" />
      </a>
      <a href="https://github.com/sidestream-tech/sidebase/issues/new/choose" target="_blank">
        <Button label="Open a issue" icon="pi pi-github" icon-pos="left" />
      </a>
    </div>
  </div>
</template>
