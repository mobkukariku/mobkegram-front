<script setup lang="ts">
import ChatHeader from "@/features/chat/ui/ChatHeader.vue";
import SendInput from "@/features/chat/ui/SendInput.vue";
</script>

<template>
  <div class="flex flex-col w-full h-screen">
    <ChatHeader />

    <div class="flex-grow overflow-auto">
    </div>

    <div class="sticky bottom-0 flex justify-center mb-[50px]">
      <SendInput />
    </div>
  </div>
</template>
