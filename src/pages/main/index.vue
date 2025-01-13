<script setup lang="ts">
import SideBarLayout from "@/app/layouts/SideBarLayout.vue";
import MainPage from "./ui/page.vue"
import MessageSideBarLayout from "@/app/layouts/MessageSideBarLayout.vue";
</script>

<template>
  <SideBarLayout>
    <MessageSideBarLayout>
      <MainPage />
    </MessageSideBarLayout>
  </SideBarLayout>
</template>
