<script setup lang="ts">
import FriendsButtonLayout from "@/app/layouts/FriendsButtonLayout.vue";
import SideBarLayout from "@/app/layouts/SideBarLayout.vue";
import ReceivedRequestsPage from "./ui/page.vue"

</script>

<template>
  <SideBarLayout>
    <FriendsButtonLayout>
      <ReceivedRequestsPage />
    </FriendsButtonLayout>
  </SideBarLayout>
</template>
