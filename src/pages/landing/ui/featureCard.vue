<script setup lang="ts">
const props = defineProps({
  cardImage: String,
  cardTitle: String,
  cardDescription: String,
})
</script>

<template>
  <div class="dark:bg-[#232323] bg-[#FFFFFF] flex justify-center w-[450px] max-md: w-[250px] h-[350px] items-center flex-col gap-5 p-[30px] rounded-[6px] shadow-lg shadow-black-800/50">
    <img :src="`../src/app/assets/featuresCards/${props.cardImage}.svg`" :alt="props.cardTitle">
    <p class="text-2xl text-center font-semibold max-sm:text-xl">{{ props.cardTitle }}</p>
    <span class="text-center opacity-65">{{ props.cardDescription }}</span>
  </div>
</template>
