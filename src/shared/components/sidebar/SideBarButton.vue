<script setup lang="ts">
import {Button} from "primevue";

defineProps({
  icon: String,
})
</script>

<template>
  <Button class="mb-2 ">
    <i :class="icon" style="font-size: 1.3em"></i>
  </Button>
</template>

<style scoped>

</style>