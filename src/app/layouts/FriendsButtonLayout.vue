<script setup lang="ts">
import Container from "@/shared/components/Container.vue";
import ButtonsList from "@/shared/components/buttons/ButtonsList.vue";
</script>

<template >
  <Container class="flex h-fit mt-[100px] gap-5 justify-center ">
    <slot />
    <ButtonsList />
  </Container>
</template>