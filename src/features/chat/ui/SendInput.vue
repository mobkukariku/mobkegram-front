<script setup lang="ts">
import { ref, computed } from "vue";
import { useChatStore } from "@/features/chat/model/store";
import {InputText, Button} from "primevue";
const inputText = ref("");
const isButtonActive = computed(() => inputText.value.trim().length > 0);
const chatStore = useChatStore();


const handleSend = async () => {
  if (isButtonActive.value) {
    await chatStore.sendMessage(inputText.value);
    inputText.value = "";

    const chatEndRef = document.querySelector("#chat-end");
    chatEndRef?.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <div class="sticky bottom-0 flex justify-center mb-[50px]">
    <form @submit.prevent="handleSend" class="relative flex gap-3">
      <InputText v-model="inputText" class="flex h-[60px] w-[700px] pr-[50px]" />
      <Button
          :class="[
          'absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-[70px] w-[40px] h-[40px] transition-opacity',
        ]"
          icon="pi pi-send"
          type="submit"
          :disabled="!isButtonActive"
      />
    </form>
  </div>
</template>
