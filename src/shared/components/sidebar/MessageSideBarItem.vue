<script setup lang="ts">

import {useChatStore} from "@/features/chat/model/store";
import router from "@/app/providers/router";

const props = defineProps({
  id: String,
  pictureURL: String,
  name: String,
  email: String,
  senderName: String,
  content: String,
});


const chatStore = useChatStore();


const handleButton = () => {
  console.log("1");
  chatStore.setUser({
    _id: props.id || "",
    name: props.name || "",
    email: props.email || "",
    pictureURL: props.pictureURL || "",
  });
  router.push("/chat");
};

</script>

<template>
  <div class="bg-[#202020] p-[20px] w-[300px] rounded-lg" @click.prevent="handleButton">
    <div class="flex  gap-3">
      <img :src="pictureURL" alt="name" class="rounded-full w-[70px]" />
     <div class="flex flex-col gap-2">
       <p class="font-bold text-[20px] ">{{name}}</p>
       <i class="opacity-60"><span class="text-[#34D399] font-bold ">{{senderName}}</span>: {{content}}</i>
     </div>
    </div>
  </div>
</template>
