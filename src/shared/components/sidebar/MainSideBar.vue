<script setup lang="ts">
import MainSideBar from "@/shared/components/sidebar/MainSideBar.vue";
import { useProfileStore } from "@/features/profile/model/store";
import { onMounted, computed, ref, watchEffect } from "vue";
import { Avatar, Skeleton, Drawer, Button } from "primevue";
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


const visible = ref(false);
const showProfileDialog = ref(false);
const showSettingsDialog = ref(false);

</script>


<template>
  <div class="card flex justify-center absolute z-20 ">
    <Drawer v-model:visible="visible">
      <template #container="{ closeCallback }">
        <div class="flex flex-col h-full">
          <div class="flex items-center justify-between px-6 pt-4 shrink-0">
                        <span class="inline-flex items-center gap-2">
                          <img class="w-[170px]" src="@/app/assets/logo.svg" alt="logo">
                        </span>
            <span>
                            <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined></Button>
                        </span>
          </div>
          <div class="overflow-y-auto mt-[20px]">
            <ul class="list-none p-4 m-0">
              <SideBarButton icon="pi-home" name="Home" @click.native="router.push(`/main`)" />
              <SideBarButton icon="pi-users" name="Friends" @click.native="router.push(`/friends`)" />
              <SideBarButton icon="pi-cog" name="Settings" @click.native="showSettingsDialog = true" />
            </ul>
          </div>
          <div class="mt-auto">
            <hr class="mb-4 mx-4 border-t border-0 border-surface-200 dark:border-surface-700" />
            <a v-ripple class="m-4 flex items-center cursor-pointer p-4 gap-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
              <Avatar
                  :image="profile?.pictureURL"
                  size="large"
                  class=" mr-2 cursor-pointer hover:opacity-80 transition-opacity"
                  shape="circle"
                  @click="showProfileDialog = true"
              />
              <span class="font-bold">{{profile.name}}</span>
            </a>
          </div>
        </div>
      </template>
    </Drawer>
    <ProfileModal v-model:visible="showProfileDialog" />
    <SettingsModal v-model:visible="showSettingsDialog" />
    <Button icon="pi pi-bars" @click="visible = true" />
  </div>
</template>
