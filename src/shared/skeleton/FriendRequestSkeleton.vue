<script setup lang="ts">
import { ref } from "vue";
import { Skeleton } from "primevue";

const skeletonCount = ref(4);
</script>

<template>
  <div class="flex flex-col gap-[20px]">
    <Skeleton
        v-for="index in skeletonCount"
        :key="index"
        class="w-full "
        height="10rem"
    />
  </div>
</template>
