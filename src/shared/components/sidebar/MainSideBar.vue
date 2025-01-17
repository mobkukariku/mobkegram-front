<script setup lang="ts">
import MainSideBar from "@/shared/components/sidebar/MainSideBar.vue";
import { useProfileStore } from "@/features/profile/model/store";
import { onMounted, computed, ref, watchEffect } from "vue";
import { Avatar, Skeleton } from "primevue";
import ProfileModal from "@/features/profile/ui/ProfileModal.vue";
import SettingsModal from "@/features/settings/ui/SettingsModal.vue";
import SideBarButton from "@/shared/components/sidebar/SideBarButton.vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/features/auth/model/store";
import { socketConnect } from "@/app/providers/socket";

const profileStore = useProfileStore();
const router = useRouter();
const profile = computed(() => profileStore.profile);
const loading = computed(() => profileStore.loading);
const error = computed(() => profileStore.errors);

onMounted(async () => {
  if (!profile.value) {
    await profileStore.fetchProfile();
  }
  socketConnect();
});

const showProfileDialog = ref(false);
const showSettingsDialog = ref(false);

const items = [
  { icon: 'pi pi-send text-black' },
  { icon: 'pi pi-users text-black' },
  { icon: 'pi pi-cog text-black' }
];
</script>

<template>
  <div class="bg-[#34D399]   w-[60px] fixed h-screen flex flex-col items-center justify-between">
    <div v-if="loading">
      <Skeleton shape="circle" size="4rem" class="mr-2" />
    </div>

    <p v-if="error" class="text-red-500">{{ error }}</p>

    <div v-show="profile" class="flex flex-col items-center justify-between mt-5">
      <Avatar
          :image="profile?.pictureURL"
          size="large"
          class="mb-[70px] cursor-pointer hover:opacity-80 transition-opacity"
          shape="circle"
          @click="showProfileDialog = true"
      />

      <div class="flex justify-center items-center flex-col gap-[10px]">
        <SideBarButton icon="pi pi-send" @click.native="router.push(`/main`)" />
        <SideBarButton icon="pi pi-users" @click.native="router.push(`/friends`)" />
        <SideBarButton icon="pi pi-cog" @click.native="showSettingsDialog = true" />
      </div>
    </div>
  </div>

  <ProfileModal v-model:visible="showProfileDialog" />
  <SettingsModal v-model:visible="showSettingsDialog" />
</template>
