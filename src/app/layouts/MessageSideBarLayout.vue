<script setup lang="ts">

import MessageSideBar from "@/shared/components/sidebar/MessageSideBar.vue";
</script>

<template>
  <div class="flex flex-row w-full">
    <MessageSideBar/>
    <slot />
  </div>
</template>