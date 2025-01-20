<script setup lang="ts">
import { ref, computed } from "vue";
import { useChatStore } from "@/features/chat/model/store";
import { InputText, Button } from "primevue";
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
  <div class="fixed bottom-0 w-full flex justify-center items-center mb-[20px] z-10">
    <form @submit.prevent="handleSend" class="relative  justify-center mr-[400px] flex gap-3 w-full max-md:mr-[0px]">
      <InputText
          placeholder="Send a message"
          v-model="inputText"
          class="flex w-full max-w-[700px] max-md:w-[70%] "
      />
      <Button
          :class="[
          'w-[40px] h-[40px] transition-opacity',
        ]"
          icon="pi pi-send"
          type="submit"
          :disabled="!isButtonActive"
      />
    </form>
  </div>
</template>
