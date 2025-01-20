<script setup lang="ts">
import Container from "@/shared/components/Container.vue";
import ButtonsList from "@/shared/components/buttons/ButtonsList.vue";
</script>

<template >
  <Container class="flex max-md:flex-col h-fit max-md:mt-[20px] mt-[100px] gap-5 justify-center  max-md:items-center  ">
    <ButtonsList />
    <slot />
  </Container>
</template>