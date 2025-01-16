<script setup lang="ts">
import { computed, onMounted, onUnmounted } from "vue";
import { useChatStore } from "@/features/chat/model/store";
import { InputIcon, InputText, IconField } from "primevue";
import MessageSideBarItem from "@/shared/components/sidebar/MessageSideBarItem.vue";
import router from "@/app/providers/router";

const chatStore = useChatStore();
const sidebarMessages = computed(() => chatStore.sideBarMessages);

onMounted(() => {
  chatStore.getSideBarMessages();
  chatStore.subscribeToSidebarMessages();
});

onUnmounted(() => {
  chatStore.unSubscribeFromSidebarMessages();
});

const handlePage = () => {
  router.push("/chat");
};
</script>

<template>
  <div class="dark:bg-[#27272A] bg-[#D9D9D9] ml-[50px] w-[400px] h-screen  border-r dark:border-[#454545] border-[#ADADAD] p-10">
    <!-- Заголовок -->
    <p class="text-2xl font-semibold dark:text-white mb-5">Messages</p>

    <!-- Поле поиска -->
    <div class="relative">
      <IconField>
        <InputIcon class="pi pi-search text-white" />
        <InputText class="w-full bg-[#3E3E42] dark:text-white placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none" placeholder="Search..." />
      </IconField>
    </div>

    <!-- Список сообщений -->
    <div class="mt-8 space-y-4 overflow-y-auto">
      <MessageSideBarItem
          v-for="sidebarMessage in sidebarMessages"
          :key="sidebarMessage._id"
          :id="sidebarMessage.id"
          :pictureURL="sidebarMessage.pictureURL"
          :name="sidebarMessage.name"
          :senderName="sidebarMessage.senderName"
          :content="sidebarMessage.content"
          class="cursor-pointer hover:bg-[#3E3E42] p-3 rounded-md transition-colors"
          @click.prevent="handlePage"
      />
    </div>
  </div>
</template>
