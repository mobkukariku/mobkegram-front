<script setup lang="ts">
import ChatPage from "./ui/page.vue"
import MessageSideBarLayout from "@/app/layouts/MessageSideBarLayout.vue";
import SideBarLayout from "@/app/layouts/SideBarLayout.vue";
</script>

<template>
  <SideBarLayout >
    <MessageSideBarLayout class="max-sm:hidden">
      <ChatPage />
    </MessageSideBarLayout>

    <ChatPage class="max-sm:flex hidden " />
  </SideBarLayout>
</template>
