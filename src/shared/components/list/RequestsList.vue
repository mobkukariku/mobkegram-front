<script setup lang="ts">
import {FriendUser} from "@/shared/dtos/dto";

defineProps({
  title: String,
  List: Array,
})
</script>

<template>
  <div class="bg-[#27272A] p-[20px] rounded-xl h-fit border border-[#454545] w-[720px]">
    <p class="text-xl font-bold">{{title}}</p>
    <div class="flex flex-wrap gap-5">
      <div v-for="item in List" :key="item.id" class="flex flex-col justify-center items-center bg-[#202024] p-[20px] rounded-lg mt-[20px] w-[200px]">
        <img :src="item.pictureURL" :alt="item.name" class="rounded-full w-[120px] bg-gray-600" />
        <div class="text-center mt-[20px] flex flex-col justify-center items-center gap-2">
          <p class="font-bold">{{item.username}}</p>
          <p class="font-light opacity-85">{{item.email}}</p>
        </div>
      </div>
    </div>
  </div>
</template>