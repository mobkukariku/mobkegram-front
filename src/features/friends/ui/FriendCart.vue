<script setup lang="ts">
import { useChatStore } from "@/features/chat/model/store";
import router from "@/app/providers/router";

const props = defineProps({
  _id: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  pictureURL: {
    type: String,
    default: null,
  },
});


const chatStore = useChatStore();


const handleButton = () => {
  chatStore.setUser({
    _id: props._id,
    name: props.name,
    email: props.email,
    pictureURL: props.pictureURL,
  });
  router.push("/chat");
};
</script>


<template>
  <div class="text-black dark:text-white flex flex-row max-sm:flex-col max-sm:justify-center max-sm:items-center  dark:bg-[#202024] bg-[#EBEBEB] p-[30px] rounded-lg gap-[20px] ">
    <img :src="pictureURL" class="w-[120px] h-[120px] rounded-full" :alt="name" />
    <div class="flex flex-col justify-center max-sm:text-center ">
      <p class="text-[18px] font-semibold max-sm:">{{name}}</p>
      <p class="font-light opacity-70">{{email}}</p>
      <div class="mt-[10px] text-[#5A9CFF] cursor-pointer">
        <span class="pi pi-pen-to-square"></span>
        <span class="font-semibold" @click.prevent="handleButton">
          Write something
        </span>
      </div>
    </div>
  </div>
</template>