<script setup lang="ts">
import { computed, ref } from "vue";
import { Dialog, Button } from "primevue";
import { useProfileStore } from "@/features/profile/model/store";
import InfoRow from "@/shared/components/modal/InfoRow.vue";
import ChangeName from "@/features/profile/ui/ChangeName.vue";
import { useAuthStore } from "@/features/auth/model/store";
import ChangeUsername from "@/features/profile/ui/ChangeUsername.vue";

const profileStore = useProfileStore();
const authStore = useAuthStore();

const showDialog = ref(false);
const profile = computed(() => profileStore.profile);
const showNameChangeDialog = ref(false);
const showUsernameChangeDialog = ref(false);
const fileInputRef = ref<HTMLInputElement | null>(null);

const onFileChange = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) {
    console.error("Файл не выбран");
    return;
  }

  const formData = new FormData();
  formData.append("avatar", file);

  try {
    profileStore.changeAvatar(formData);
  } catch (error) {
    console.error("Ошибка загрузки аватара:", error);
  }
};

const handleAvatarClick = () => {
  fileInputRef.value?.click();
};

const handleLogOut = async () => {
  await authStore.logoutAction();
};
</script>

<template>
  <Dialog v-model:visible="showDialog" header="Profile" :style="{ width: '25rem'}">
    <div class="flex flex-col items-center justify-center gap-5 relative" v-if="profile">
      <img
          :src="profile.pictureURL"
          :alt="profile.name"
          class="rounded-full cursor-pointer w-[150px] h-[150px] object-cover avatar-image transition duration-200 ease-in-out"
          @click="handleAvatarClick"
      />
      <input
          ref="fileInputRef"
          type="file"
          class="hidden"
          @change="onFileChange"
      />
      <p class="text-2xl font-bold">{{ profile.username }}</p>
    </div>
    <div class="flex flex-col gap-3 mt-3" v-if="profile">
      <InfoRow icon="pi pi-user" label="Name" :value="profile.name" @click="showNameChangeDialog = true" />
      <InfoRow icon="pi pi-at" label="Email" :value="profile.email" />
      <InfoRow icon="pi pi-asterisk" label="Username" :value="profile.username" @click="showUsernameChangeDialog = true" />
    </div>
    <div class="flex justify-end mt-[20px]">
      <Button variant="outlined" class="font-medium h-[35px]" @click="handleLogOut">Log Out</Button>
    </div>
    <ChangeName v-model:visible="showNameChangeDialog" />
    <ChangeUsername v-model:visible="showUsernameChangeDialog" />
  </Dialog>
</template>

<style scoped>
.avatar-image:focus,
.avatar-image:active {
  filter: brightness(0.2);
}

.avatar-image:hover {
  filter: brightness(0.6);
}
</style>
