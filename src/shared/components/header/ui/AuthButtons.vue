<script setup lang="ts">
  import {Button} from "primevue";
</script>

<template >
  <div class="flex justify-end gap-3">
    <router-link to="/login">
      <Button variant="outlined" class="h-[40px] font-medium w-[100px]">
        Login
      </Button>
    </router-link>
    <router-link to="/register">
      <Button class="h-[40px] font-medium w-[120px]">
        Register
      </Button>
    </router-link>
  </div>
</template>

