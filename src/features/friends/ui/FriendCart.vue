<script setup lang="ts">
import { useChatStore } from "@/features/chat/model/store";
import router from "@/app/providers/router";

const props = defineProps({
  id: String,
  name: String,
  email: String,
  pictureURL: String,
});


const chatStore = useChatStore();


const handleButton = () => {
  console.log("1");
  chatStore.setUser({
    id: props.id,
    name: props.name,
    email: props.email,
    pictureURL: props.pictureURL,
  });
  router.push("/chat");
};
</script>


<template>
  <div class="flex flex-row  bg-[#202024] p-[30px] rounded-lg gap-[20px] ">
    <img :src="pictureURL" class="w-[120px] h-[120px] rounded-full" :alt="name" />
    <div class="flex flex-col justify-center ">
      <p class="text-[18px] font-semibold">{{name}}</p>
      <p class="font-extralight opacity-70">{{email}}</p>
      <div class="mt-[10px] text-[#5A9CFF] cursor-pointer">
        <span class="pi pi-pen-to-square"></span>
        <span class="font-semibold" @click.prevent="handleButton">
          Write something
        </span>
      </div>
    </div>
  </div>
</template>