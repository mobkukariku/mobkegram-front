<script setup lang="ts">
import { useFriendsStore } from "@/features/friends/model/store";
import { computed, onMounted } from "vue";
import FriendCart from "@/features/friends/ui/FriendCart.vue";

const friendsStore = useFriendsStore();

const friends = computed(() => friendsStore.friends || []);

onMounted(() => {
  friendsStore.fetchFriends();
});
</script>

<template>
  <div v-if="friendsStore.loading">Loading...</div>

  <FriendCart
      v-for="(friend) in friends"
      :key="friend._id"
      :name="friend.name"
      :email="friend.email"
      :pictureURL="friend.pictureURL"
  />
</template>
