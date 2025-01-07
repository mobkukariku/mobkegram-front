<script setup lang="ts">
import { computed, ref } from "vue";
import { Image, Dialog, FileUpload } from "primevue";
import { useProfileStore } from "@/features/profile/model/store";
import InfoRow from "@/shared/components/modal/InfoRow.vue";
import ChangeName from "@/features/profile/ui/ChangeName.vue";

const profileStore = useProfileStore();
const showDialog = ref(false);
const profile = computed(() => profileStore.profile);
const showNameChangeDialog = ref(false);

</script>

<template>
  <Dialog v-model:visible="showDialog" header="Profile" :style="{ width: '25rem', height: '32rem'}">
    <div class="flex flex-col items-center justify-center gap-5 relative" v-if="profile">
      <Image
          :src="profile.pictureURL"
          width="150"
          :alt="profile.name"
          class="rounded-image"
          preview
      />
      <div class="absolute z-20 overflow-y-auto right-[85px] bottom-[45px]">
        <FileUpload
            mode="basic"
            name="avatar"
            :url="`http://localhost:5001/api/profile/change-avatar`"
        accept="image/*"
        :maxFileSize="5000000"
        @upload="onUpload"
        :auto="true"
        chooseLabel=" "
        class=""
        />
      </div>

      <p class="text-2xl font-bold">{{ profile.username }}</p>
    </div>
    <div class="flex flex-col gap-3 mt-3" v-if="profile">
      <InfoRow icon="pi pi-user" label="Name" :value="profile.name" @click="showNameChangeDialog = true" />
      <InfoRow icon="pi pi-at" label="Email" :value="profile.email" />
      <InfoRow icon="pi pi-asterisk" label="Username" :value="profile.username" />
    </div>
    <ChangeName v-model:visible="showNameChangeDialog" />
  </Dialog>
</template>
