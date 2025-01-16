<script setup lang="ts">
import { useChatStore } from "@/features/chat/model/store";
import { computed } from "vue";
import {useProfileStore} from "@/features/profile/model/store";

const props = defineProps({
  senderID: String,
});

const chatStore = useChatStore();

const currentUser = computed(() => chatStore.currentUser);
</script>

<template>
  <div class="mx-[20px]">
    <div v-if="currentUser && props.senderID !== currentUser.id" class="flex justify-end items-end">
      <div class="w-fit max-w-[300px] bg-[#34D399] text-black p-[10px] px-[20px] rounded-tl-lg rounded-tr-sm rounded-bl-md rounded-br-xl break-words">
        <p class="text-end break-words">
          <slot />
        </p>
      </div>
    </div>
    <div v-else class="flex justify-start">
      <div class="w-fit max-w-[300px]  dark:bg-[#2C2C2C] bg-[#D6D6D6] p-[10px] px-[20px] rounded-tr-lg rounded-tl-sm rounded-bl-md rounded-br-xl break-words">
        <p class="font-semibold text-[#34D399]"><i>{{currentUser.name}}</i></p>
        <p class="text-start mt-[5px] dark:text-white  break-words">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.break-words {
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}
</style>
