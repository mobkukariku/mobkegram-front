import { defineStore } from "pinia";
import { getMessages, getUsersForSideBar, sendMessage } from "@/features/chat/model/api";
import { socket } from "@/app/providers/socket";

export const useChatStore = defineStore('chat', {
    state: () => ({
        messages: [] as Array<{ id: string; content: string; senderID: string; receiverID: string }>,
        users: [],
        currentUser: null as null | {
            id: string;
            name: string;
            email: string;
            pictureURL: string;
        },
        isUserLoading: false,
        isMessageLoading: false,
    }),
    actions: {
        async getUsers() {
            this.isUserLoading = true;
            try {
                const data = await getUsersForSideBar();
                this.users = data.users;
            } catch (err) {
                console.error(err);
            } finally {
                this.isUserLoading = false;
            }
        },
        async getMessages(id: string) {
            this.isMessageLoading = true;
            try {
                const data = await getMessages(id);
                this.messages = data;
            } catch (err) {
                console.error(err);
            } finally {
                this.isMessageLoading = false;
            }
        },
        async sendMessage(message: string) {
            if (!this.currentUser) {
                console.error("Current user is not set.");
                return;
            }
            try {
                const data = await sendMessage(this.currentUser.id, message);
                this.messages.push(data.message);
            } catch (err) {
                console.error(err);
            }
        },
        setUser(user: { id: string; name: string; email: string; pictureURL: string }) {
            this.currentUser = user;
        },
        clearUser() {
            this.currentUser = null;
        },
        subscribeToMessages() {
            if (!this.currentUser) {
                console.error("Current user is not set.");
                return;
            }
            socket.on("newMessage", (newMessage) => {
                if (newMessage.receiverID === this.currentUser?.id || newMessage.senderID === this.currentUser?.id) {
                    this.messages.push(newMessage);
                }
            });
        },
        unSubscribeFromMessages() {
            socket.off("newMessage");
        },
    },
});
