<script setup lang="ts">

const props = defineProps({
  icon: String,
  name: String,
});
</script>

<template>
  <li>
    <a v-ripple class="flex items-center cursor-pointer dark:hover:border-black hover:border-gray-400 p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0  duration-150 transition-colors">
      <i :class="`pi mr-2 ${props.icon}`"></i>
      <span class="font-medium">{{ props.name }}</span>
    </a>
  </li>
</template>
