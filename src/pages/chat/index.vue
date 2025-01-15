<script setup lang="ts">
import ChatPage from "./ui/page.vue"
import MessageSideBarLayout from "@/app/layouts/MessageSideBarLayout.vue";
import SideBarLayout from "@/app/layouts/SideBarLayout.vue";
</script>

<template>
  <SideBarLayout>
    <MessageSideBarLayout>
      <ChatPage />
    </MessageSideBarLayout>
  </SideBarLayout>
</template>

<style scoped>

</style>