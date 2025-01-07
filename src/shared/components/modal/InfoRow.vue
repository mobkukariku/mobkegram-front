<script setup lang="ts">
defineProps({
  icon: {
    type: String,
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
  },
});
</script>

<template>
  <div class="flex flex-row justify-between hover:bg-black/30 transition-colors p-2 rounded-md cursor-pointer">
    <div class="flex flex-row items-center gap-4">
      <i :class="icon"></i>
      <p>{{ label }}</p>
    </div>
    <p class="text-[#2CCE6F]">{{ value }}</p>
  </div>


</template>
