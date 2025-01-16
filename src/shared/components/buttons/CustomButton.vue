<script setup lang="ts">
import {Button} from "primevue";
defineProps({
  text: String,
})
</script>

<template>
  <button class="dark:hover:bg-[#202024] hover:bg-[#EBEBEB]  p-[10px] rounded-lg w-full transition-all flex">
    {{text}}
  </button>
</template>
