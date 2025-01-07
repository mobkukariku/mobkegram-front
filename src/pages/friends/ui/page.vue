<script setup lang="ts">
import Container from "@/shared/components/Container.vue";
import Friends from "@/features/friends/ui/Friends.vue";
import ButtonsList from "@/features/friends/ui/ButtonsList.vue";
</script>

<template>
  <Container  class="flex flex-row  mt-[100px] justify-center gap-[30px] h-fit ">
    <Friends />
    <ButtonsList />
  </Container>
</template>
