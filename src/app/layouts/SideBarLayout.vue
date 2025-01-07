<script setup lang="ts">
import MainSideBar from "@/shared/components/sidebar/MainSideBar.vue";
</script>

<template>
  <div class="flex flex-row">
    <MainSideBar />
    <slot />
  </div>
</template>
