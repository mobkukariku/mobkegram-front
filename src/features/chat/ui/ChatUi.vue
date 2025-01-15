<script setup lang="ts">
import { computed, ref, watch, onMounted } from "vue";
import { useChatStore } from "@/features/chat/model/store";
import ChatHeader from "@/features/chat/ui/ChatHeader.vue";
import SendInput from "@/features/chat/ui/SendInput.vue";
import ChatContainer from "@/features/chat/ui/ChatContainer.vue";

const chatStore = useChatStore();
const selectedUser = computed(() => chatStore.currentUser || {});
const messages = computed(() => chatStore.messages);
const chatEndRef = ref<HTMLElement | null>(null);


const scrollToBottom = () => {
  chatEndRef.value?.scrollIntoView({ behavior: "smooth" });
};


watch(messages, () => {
  scrollToBottom();
});


onMounted(() => {
  scrollToBottom();
});
</script>

<template>
  <div v-if="selectedUser" class="flex flex-col w-full h-screen">
    <ChatHeader
        :name="selectedUser.name"
        :pictureURL="selectedUser.pictureURL"
    />
    <div class="flex-grow overflow-auto">
      <ChatContainer />
      <div id="chat-end" ref="chatEndRef"></div>
    </div>
    <SendInput />
  </div>
</template>
