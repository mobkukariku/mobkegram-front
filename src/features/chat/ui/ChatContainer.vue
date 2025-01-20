<script setup lang="ts">
import { computed, onMounted, onUnmounted } from "vue";
import { useChatStore } from "@/features/chat/model/store";
import MessageUI from "@/features/chat/ui/MessageUI.vue";


const chatStore = useChatStore();
const friendId = computed(() => chatStore.currentUser?.id);
const messages = computed(() => chatStore.messages || []);

onMounted(() => {
  if (friendId.value) {
    chatStore.getMessages(friendId.value);
  }
  chatStore.subscribeToMessages();
});

onUnmounted(() => {
  chatStore.unSubscribeFromMessages();
});
</script>

<template>
  <div class="flex-grow overflow-auto p-4">
    <MessageUI
        v-for="message in messages"
        :key="message.id"
        :senderID="message.senderID"
        class="mb-[20px]"
    >
      {{ message.content }}
    </MessageUI>
  </div>
</template>
