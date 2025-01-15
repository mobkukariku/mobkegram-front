<script setup lang="ts">
import { useFriendsStore } from "@/features/friends/model/store";
import { computed, onMounted } from "vue";
import FriendCart from "@/features/friends/ui/FriendCart.vue";
import FriendRequestSkeleton from "@/shared/skeleton/FriendRequestSkeleton.vue";

const friendsStore = useFriendsStore();

const friends = computed(() => friendsStore.friends || []);

onMounted(() => {
  friendsStore.fetchFriends();
});
</script>

<template>
  <FriendRequestSkeleton v-if="friendsStore.loading" />

  <FriendCart
      v-else
      :id="friend._id"
      v-for="(friend) in friends"
      :key="friend._id"
      :name="friend.name"
      :email="friend.email"
      :pictureURL="friend.pictureURL"
  />
</template>
