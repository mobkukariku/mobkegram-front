<script setup lang="ts">
import { ref, computed } from "vue";
import { InputText, Button } from "primevue";


const inputText = ref("");

const isButtonActive = computed(() => inputText.value.trim().length > 0);
</script>

<template>
  <div class="relative flex gap-3">

    <InputText
        v-model="inputText"
        class="flex h-[60px] w-[700px] pr-[50px]"
    />
    <Button
        :class="[
        'absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-[70px] w-[40px] h-[40px] transition-opacity',
      ]"
        icon="pi pi-send"
        :disabled="!isButtonActive"
    />
  </div>
</template>
