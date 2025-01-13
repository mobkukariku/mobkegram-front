<script setup lang="ts">
import {InputIcon, InputText, IconField} from "primevue";
</script>

<template>
  <div class="bg-[#27272A] w-[400px] border-r border-[#454545] p-[40px] px-[50px]">
    <p class="text-2xl font-semibold mb-[20px]">Messages</p>
    <div class="flex  flex-col">
     <IconField>
       <InputIcon class="pi pi-search" />
       <InputText class="w-full" placeholder="Search..." />
     </IconField>
    </div>
  </div>
</template>