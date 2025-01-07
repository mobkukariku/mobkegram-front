<script setup lang="ts">
  import {ref} from "vue";
  import {Dialog} from "primevue";
  import InfoRow from "@/shared/components/modal/InfoRow.vue";

  const showDialog = ref(false);

</script>

<template>
  <Dialog v-model="showDialog" :modal="true" header="Settings" :style="{ width: '25rem', height: '19rem'}">
    <div class="flex flex-col gap-3 mt-3">
      <InfoRow icon="pi pi-user"  label="My Account"  />
      <InfoRow icon="pi pi-lightbulb"  label="Theme" value="Dark"  />
      <InfoRow icon="pi pi-language"  label="Language" value="English" />

    </div>
  </Dialog>
</template>