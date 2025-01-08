<script setup lang="ts">
import SendRequestsPage from './ui/page.vue'
import SideBarLayout from "@/app/layouts/SideBarLayout.vue";
import FriendsButtonLayout from "@/app/layouts/FriendsButtonLayout.vue";
</script>

<template>
  <SideBarLayout>
    <FriendsButtonLayout>
      <SendRequestsPage />
    </FriendsButtonLayout>
  </SideBarLayout>
</template>
