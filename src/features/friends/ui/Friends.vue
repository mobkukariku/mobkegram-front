<script setup lang="ts">
import { ref } from "vue";
import { Button, InputText } from "primevue";
import FriendsList from "@/features/friends/ui/FriendsList.vue";
import FriendAddModal from "@/features/requests/ui/FriendAddModal.vue";

const showAddModal = ref(false);
</script>

<template>
    <div class="bg-[#27272A] border border-[#454545] p-[30px] px-[40px] rounded-xl flex flex-col w-[720px] gap-[20px] pb-[50px]">
      <div class="flex flex-row justify-between items-center">
        <p class="text-2xl font-bold opacity-60">Friends</p>
        <Button
            class="h-[35px] font-semibold"
            @click="showAddModal = true"
        >
          Add Friend
        </Button>
      </div>
      <InputText placeholder="Search..." />
      <FriendsList />
    </div>

    <FriendAddModal v-model:visible="showAddModal" />
</template>
