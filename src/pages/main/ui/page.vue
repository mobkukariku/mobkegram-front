<script setup lang="ts">
import {useAuthStore} from "@/features/auth/model/store";
import {onMounted} from "vue";
import ChatUi from "@/features/chat/ui/ChatUi.vue";
import StartConversation from "@/features/chat/ui/StartConversation.vue";

</script>

<template>
  <StartConversation />

</template>
