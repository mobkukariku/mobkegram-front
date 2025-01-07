<script setup lang="ts">
  import {Button} from "primevue";
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col items-center gap-5">
      <img src="@/app/assets/404.svg" alt="404">
      <p class="text-4xl font-bold">PAGE NOT FOUND</p>
      <router-link to="/">
        <Button variant="outlined" class="font-semibold"  >BACK TO HOME</Button>
      </router-link>
    </div>
  </div>
</template>
