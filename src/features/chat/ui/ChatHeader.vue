<script setup lang="ts">
  import {Menu, Button} from "primevue";
  import {ref} from "vue";

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
  const toggle = (event) => {
    menu.value.toggle(event);
  };

</script>

<template>
  <div class="bg-[#27272A] w-full h-[80px] border-b border-[#454545] flex justify-between flex-row  items-center px-[60px]">
   <div class="flex items-center">
     <img src="https://my-mobkegram-bucket.s3.eu-north-1.amazonaws.com/avatars/1735933382939_asd.jpg"  alt="ava" class="w-[50px] rounded-full">
     <div class="flex flex-col ml-[15px]">
       <p class="text-xl font-medium">Chat Name</p>
       <span class="opacity-60">12 members, 5 online</span>
     </div>
   </div>
    <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" class="text-[#34D399]" variant="link" />
  </div>
    <Menu ref="menu" :popup="true" id="overlay_menu" :model="items" />
</template>
