<script setup lang="ts">
import CustomButton from "@/shared/components/buttons/CustomButton.vue";
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="bg-[#27272A] p-[20px] w-[300px] rounded-xl h-fit border border-[#454545]">
    <CustomButton text="All Friends" @click="router.push('/friends')" />
    <CustomButton text="Friend Requests" @click="router.push('/sendRequests')" />
    <CustomButton text="Outgoing Requests" @click="router.push('/receivedRequests')" />
  </div>
</template>
