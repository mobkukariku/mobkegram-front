<script setup lang="ts">
import Container from '../Container.vue'
import AuthButtons from "@/shared/components/header/ui/AuthButtons.vue";
import { ref, watchEffect, onUnmounted } from "vue";


</script>

<template>
  <Container class="flex justify-between items-center my-[20px]">

    <img src="../../../app/assets/mobileLogo.svg" class="w-auto" alt="logo" />
    <AuthButtons />
  </Container>
</template>
