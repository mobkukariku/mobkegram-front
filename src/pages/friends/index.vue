<script setup lang="ts">
import FriendsPage from "@/pages/friends/ui/page.vue";
import SideBarLayout from "@/app/layouts/SideBarLayout.vue";
import FriendsButtonLayout from "@/app/layouts/FriendsButtonLayout.vue";
</script>

<template >
    <SideBarLayout>
      <FriendsButtonLayout >
        <FriendsPage />
      </FriendsButtonLayout>
    </SideBarLayout>
</template>

