<script setup lang="ts">
import {Button} from "primevue";
defineProps({
  text: String,
})
</script>

<template>
  <button class="hover:bg-[#202024] p-[10px] rounded-lg w-full transition-all flex">
    {{text}}
  </button>
</template>
