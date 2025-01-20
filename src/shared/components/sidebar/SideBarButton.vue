<script setup lang="ts">

const props = defineProps({
  icon: String,
  name: String,
});
</script>

<template>
  <li>
    <div class="flex items-center cursor-pointer dark:hover:bg-black dark:hover:bg-opacity-30 hover:bg-gray-300  p-3 rounded-2xl text-surface-700  dark:text-surface-0  duration-150 transition-colors">
      <i :class="`pi mr-2 ${props.icon}`"></i>
      <span class="font-medium">{{ props.name }}</span>
    </div>
  </li>
</template>
