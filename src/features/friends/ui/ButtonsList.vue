<script setup lang="ts">
  import {Button} from "primevue";
  import CustomButton from "@/features/friends/ui/CustomButton.vue";
</script>

<template>
  <div class="bg-[#27272A] p-[20px] w-[300px] rounded-xl h-fit border border-[#454545]">
    <CustomButton text="My Friends" />
    <CustomButton text="Friend Requests" />
    <CustomButton text="Outgoing Requests" />
  </div>
</template>
