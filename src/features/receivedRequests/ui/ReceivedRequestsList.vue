<script setup lang="ts">

import RequestsList from "@/shared/components/list/RequestsList.vue";
import {computed, onMounted} from "vue";
import {useReceivedRequestsStore} from "@/features/receivedRequests/modal/store";
import RequestsModalSkeleton from "@/shared/skeleton/RequestsModalSkeleton.vue";

const receivedRequestsStore = useReceivedRequestsStore();

onMounted(()=>{
  receivedRequestsStore.fetchReceivedRequest();
})

const requests = computed(()=>receivedRequestsStore.receivedRequests);
</script>

<template>
  <RequestsList :loadin="receivedRequestsStore.loading"  title="Received Requests" :List="requests" :isAdd="true"  />
</template>
