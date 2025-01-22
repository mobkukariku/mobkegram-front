<script setup lang="ts">
import { computed, onMounted, onUnmounted } from "vue";
import { useChatStore } from "@/features/chat/model/store";
import { InputIcon, InputText, IconField } from "primevue";
import MessageSideBarItem from "@/shared/components/sidebar/MessageSideBarItem.vue";
import router from "@/app/providers/router";

const chatStore = useChatStore();

const handlePage = () => {
  router.push("/chat");
};
</script>

<template>
  <div class="dark:bg-[#27272A] bg-[#D9D9D9] max-md:w-full w-[400px] h-screen  border-r dark:border-[#454545] border-[#ADADAD] p-10">
    <p class="text-2xl font-semibold dark:text-white mb-5">Messages</p>

    <div class="relative">
      <IconField>
        <InputIcon class="pi pi-search text-white" />
        <InputText class="w-full bg-[#3E3E42] dark:text-white placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none" placeholder="Search..." />
      </IconField>
    </div>

    <div class="mt-8 space-y-4 overflow-y-auto">
    </div>
  </div>
</template>
