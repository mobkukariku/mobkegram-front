<script setup lang="ts">
  import Container from '@/shared/components/Container.vue'
</script>

<template>
  <Container>
    <div class="flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-[50px]">
      <div class="flex flex-col justify-center items-start gap-3 max-md:items-center max-md:text-center max-md:mt-[100px] ">
        <p class="text-6xl max-md:text-5xl max-sm:text-4xl font-bold text-[#34D399]">Connect, Share, and Stay Close</p>
        <span class="text-xl text-[#34D399] max-sm:px-[10px]">A secure and seamless messaging experience for everyone, anywhere.</span>
      </div>
      <img src="@/app/assets/bannerSVG.svg" alt="bannerSvg" />
    </div>
  </Container>
</template>
