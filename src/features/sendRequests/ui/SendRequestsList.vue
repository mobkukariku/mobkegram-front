<script setup lang="ts">
import RequestsList from "@/shared/components/list/RequestsList.vue";
import { useSendRequestsStore } from "@/features/sendRequests/modal/store";
import { computed, onMounted } from "vue";

const sendRequestsStore = useSendRequestsStore();

onMounted(() => {
  sendRequestsStore.fetchSentRequests();
});

const requests = computed(() => sendRequestsStore.sentRequests || []);
</script>

<template>
  <RequestsList :loading="sendRequestsStore.loading" title="My Requests" :List="requests" :isAdd="false" />
</template>
