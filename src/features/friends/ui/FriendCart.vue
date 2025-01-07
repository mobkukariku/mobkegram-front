<script setup lang="ts">

defineProps({
  name: {
    type: String,
  },
  email:{
    type: String,
  },
  pictureURL: {
    type: String,
  }
})
</script>

<template>
  <div class="flex flex-row  bg-[#202024] p-[30px] rounded-lg gap-[20px] ">
    <img :src="pictureURL" class="w-[120px] h-[120px] rounded-full" :alt="name" />
    <div class="flex flex-col justify-center ">
      <p class="text-[18px] font-semibold">{{name}}</p>
      <p class="font-extralight opacity-70">{{email}}</p>
      <div class="mt-[10px] text-[#5A9CFF] cursor-pointer">
        <span class="pi pi-pen-to-square"></span>
        <span class="font-semibold">
          Write something
        </span>
      </div>
    </div>
  </div>
</template>