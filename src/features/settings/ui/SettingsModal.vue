<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { Dialog, SelectButton } from "primevue";


const showDialog = ref(false);
const options = ref(["🌙 Dark Mode", "☀️ Light Mode"]);

const value = ref(localStorage.getItem("theme") || "🌙 Dark Mode");

// Функция для обновления темы
const updateTheme = () => {
  if (value.value === "🌙 Dark Mode") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

watch(value, (newValue) => {
  localStorage.setItem("theme", newValue);
  updateTheme();
});

onMounted(() => {
  updateTheme();
});
</script>

<template>
  <Dialog
      v-model="showDialog"
      :modal="true"
      header="Settings"
      class="w-[400px] max-sm:w-[300px]"
  >
    <div class="flex flex-col">
      <div class="flex flex-col gap-3 items-center">
        <label for="username" class="font-semibold text-[16px]"
        >Toggle theme</label
        >
        <SelectButton v-model="value" :options="options" />
      </div>
    </div>
  </Dialog>
</template>
