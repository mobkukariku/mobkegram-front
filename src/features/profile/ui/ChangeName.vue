<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { Dialog, InputText, Button, Message, useToast } from "primevue";
import { useProfileStore } from "@/features/profile/model/store";

defineProps(["visible"]);
const emit = defineEmits(["update:visible"]);

const profileStore = useProfileStore();
const toast = useToast();

const changeform = ref({
  firstName: "",
  lastName: ""
});

const errors = ref<string[]>([]);
const isSubmitting = ref(false);

const closeDialog = () => {
  emit("update:visible", false);
};

const handleSubmit = async () => {
  if (isSubmitting.value) return;

  errors.value = [];
  isSubmitting.value = true;

  if (!changeform.value.firstName) {
    errors.value.push("First name is required.");
  }

  if (errors.value.length === 0) {
    try {
      await profileStore.updateProfile({
        name: `${changeform.value.firstName} ${changeform.value.lastName}`
      });
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Changed successfully!",
        life: 3000
      });
        closeDialog();
    } catch (err) {
      const message = err.response?.data?.message || "An error occurred.";
      errors.value.push(message);
    }
  }

  isSubmitting.value = false;
};

const onVisibleUpdate = (newVisible: boolean) => {
  emit("update:visible", newVisible);
};
</script>



<template>
  <Dialog :visible="visible" @update:visible="onVisibleUpdate" modal header="Change Name" :style="{ width: '20rem'}">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-3">
      <div class="flex flex-col gap-5">
        <InputText placeholder="First Name" v-model="changeform.firstName" />
        <InputText placeholder="Last Name" v-model="changeform.lastName" />
      </div>
      <Message
          size="small"
          severity="error"
          v-for="(error, index) in errors"
          :key="index"
          class="mb-2"
      >
        {{ error }}
      </Message>
      <div class="flex justify-end gap-2 mt-5 font-bold">
        <Button size="small" variant="link" @click="closeDialog">Cancel</Button>
        <Button size="small" variant="link" type="submit" severity="success">Confirm</Button>
      </div>
    </form>
  </Dialog>
</template>

