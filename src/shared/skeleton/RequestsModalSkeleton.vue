<script setup lang="ts">
import {Skeleton} from "primevue";
import {ref} from "vue";

const skeletonCount = ref(4);
</script>

<template>
  <div class="flex flex-row flex-wrap gap-5 mt-[50px]">
    <Skeleton
        v-for="index in skeletonCount"
        :key="index"
        width="15rem"
        height="17rem"
    ></Skeleton>
  </div>
</template>
