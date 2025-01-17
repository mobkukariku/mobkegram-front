<script setup lang="ts">
import CustomButton from "@/shared/components/buttons/CustomButton.vue";
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="dark:bg-[#27272A] bg-[#D9D9D9] max-md:w-[95%] flex flex-col  p-[20px] max-md:w-full w-[300px] rounded-xl h-fit border max-md:rounded-md  dark:border-[#454545] border-[#ADADAD]">
    <CustomButton text="All Friends" @click="router.push('/friends')" />
    <CustomButton text="Friend Requests" @click="router.push('/sendRequests')" />
    <CustomButton text="Outgoing Requests" @click="router.push('/receivedRequests')" />
  </div>
</template>
