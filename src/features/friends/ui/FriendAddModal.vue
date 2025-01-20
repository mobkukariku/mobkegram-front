<script setup lang="ts">
import {Dialog, InputText, Button, Message, useToast} from "primevue";
import { ref } from "vue";
import { useSendRequestsStore } from "@/features/sendRequests/modal/store";

const addForm = ref<{ targetUsername: string }>({ targetUsername: "" });
const requestsStore = useSendRequestsStore();
const toast = useToast()
const showAddModal = ref(false);
const errors = ref<string[]>([]);
const isSubmitting = ref(false);

const handleSubmit = async () => {
  if (isSubmitting.value) return;

  errors.value = [];
  isSubmitting.value = true;

  if (!addForm.value.targetUsername.trim()) {
    errors.value.push("Please fill all the fields");
  }

  if (errors.value.length > 0) {
    isSubmitting.value = false;
    return;
  }

  try {
    await requestsStore.doSentRequest(addForm.value.targetUsername);
    toast.add({
      severity: "success",
      summary: "Success",
      detail: "Request sent successfully!",
      life: 3000,
    });
  } catch (err:any) {
    console.error("Error sending request:", err);
    const message = err?.response?.data?.message || "An error occurred.";
    errors.value.push(message);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <Dialog v-model="showAddModal" header="Add Friend" :modal="true" :style="{ width: '25rem', }">
    <form @submit.prevent="handleSubmit">
      <div class="flex flex-col gap-[20px] mt-[10px]">
        <InputText placeholder="Username" v-model="addForm.targetUsername" />
        <Message
            size="small"
            severity="error"
            v-for="(error, index) in errors"
            :key="index"
            class="mb-2"
        >
          {{ error }}
        </Message>
        <Button class="h-[35px] font-bold" type="submit" :disabled="isSubmitting">Add</Button>
      </div>
    </form>
  </Dialog>
</template>
