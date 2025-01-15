<script setup lang="ts">
import { Menu, Button } from "primevue";
import { ref } from "vue";

defineProps({
  name: {
    type: String,
  },
  pictureURL: {
    type: String,
  },
});

const menu = ref();

const items = ref([
  {
    items: [
      {
        label: 'View profile',
        icon: 'pi pi-user'
      },
      {
        label: 'Delete chat',
        icon: 'pi pi-times-circle',
      }
    ]
  }
]);

const toggle = (event: MouseEvent) => {
  menu.value.toggle(event);
};
</script>

<template>
  <div class="bg-[#27272A] w-full min-h-[70px] border-b border-[#454545] flex justify-between flex-row items-center px-[60px]">
    <div class="flex items-center">
      <img :src="pictureURL" alt="ava" class="w-[50px] h-[50px] object-cover rounded-full">
      <div class="flex flex-col ml-[15px]">
        <p class="text-xl font-medium">{{ name }}</p>
        <span class="opacity-60">hi</span>
      </div>
    </div>
    <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" class="text-[#34D399]" variant="link" />
    <Menu ref="menu" :popup="true" id="overlay_menu" :model="items" />
  </div>
</template>
