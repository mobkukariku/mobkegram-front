import { defineStore } from "pinia";
import {getFriends} from "@/features/friends/model/api";
import { FriendUser } from "@/shared/dtos/dto";

export const useFriendsStore = defineStore("friends", {
    state: () => ({
        friends: null as FriendUser[] | null,
        loading: false,
        errors: null as string | null,
    }),
    actions: {
        async fetchFriends(): Promise<void> {
            this.loading = true;
            this.errors = null;

            try {
                const friends = await getFriends();
                this.setFriends(friends);
            } catch (error) {
                this.errors = "Error fetching friends";
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        setFriends(friendUser: FriendUser[]): void {
            this.friends = friendUser;
        },
    }
});
