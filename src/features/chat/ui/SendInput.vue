<script setup lang="ts">
import { ref, computed } from "vue";
import { InputText, Button } from "primevue";

// Создаем реактивную переменную для хранения текста
const inputText = ref("");

// Проверяем, есть ли текст в поле ввода
const isButtonActive = computed(() => inputText.value.trim().length > 0);
</script>

<template>
  <div class="relative flex gap-3">
    <!-- Input field с двусторонней привязкой данных -->
    <InputText
        v-model="inputText"
        class="flex h-[60px] w-[700px] pr-[50px]"
    />

    <!-- Кнопка, которая активна только если есть текст -->
    <Button
        :class="[
        'absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-[70px] w-[40px] h-[40px] transition-opacity',
      ]"
        icon="pi pi-send"
        :disabled="!isButtonActive"
    />
  </div>
</template>
