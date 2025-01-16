<script setup lang="ts">
import Container from "@/shared/components/Container.vue";
import FeatureCard from "@/pages/landing/ui/featureCard.vue";

const values = [
  {
    cardTitle: "Fully Secure",
    cardDescription: "Store your messages and media safely in the cloud with encrypted backups for ultimate privacy.",
    cardImage: "3"
  },
  {
    cardTitle: "End-to-End Encryption",
    cardDescription: "Ensure that your conversations are fully protected with encryption, visible only to you and your intended recipient.",
    cardImage: "2"
  },
  {
    cardTitle: "JWT Authentication",
    cardDescription: "Secure your account with industry-standard JWT tokens for safe, token-based user verification.",
    cardImage: "1"
  }
];
</script>

<template>
  <div class="dark:bg-[#171717] bg-[#D9D9D9] relative z-100 mt-[-100px] p-[60px] h-[600px]">
    <h1 class="text-3xl font-bold dark:text-white text-center mt-[30px]">OUR FEATURES</h1>
    <Container class="mt-10 flex justify-center gap-10">
      <FeatureCard
          v-for="(value, index) in values" :key="index"
          :cardTitle="value.cardTitle"
          :cardDescription="value.cardDescription"
          :cardImage="value.cardImage" />
    </Container>
  </div>
</template>
