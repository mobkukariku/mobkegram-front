import { defineStore } from "pinia";
import {getMessages, getSideBarMessages, getUsersForSideBar, sendMessage} from "@/features/chat/model/api";
import { socket } from "@/app/providers/socket";
import {SideBarMessage} from "@/shared/dtos/dto";

export const useChatStore = defineStore('chat', {
    state: () => ({
        messages: [] as Array<{ id: string; content: string; senderID: string; receiverID: string }>,
        users: [] as Array<{ id: string; name: string; email: string; pictureURL: string }>,
        sideBarMessages: [] as Array<SideBarMessage>,
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
        async getSideBarMessages() {
            this.isMessageLoading = true;
            try{
                const data = await getSideBarMessages();
                this.setSideBarMessages(data);
            }catch(err){
                console.error(err);
            }
        },
        setSideBarMessages(sideBarMessages) {
            this.sideBarMessages = sideBarMessages;
        },
        subscribeToSidebarMessages() {
            socket.on("sidebarMessage", (newMessage) => {
                if (!newMessage || !newMessage._id) {
                    console.error("Invalid message format from WebSocket");
                    return;
                }

                const existingIndex = this.sideBarMessages.findIndex(
                    (message) => message._id === newMessage._id
                );

                if (existingIndex !== -1) {
                    this.sideBarMessages[existingIndex] = newMessage;
                } else {
                    this.sideBarMessages.unshift(newMessage);
                }
            });
        },
        unSubscribeFromSidebarMessages() {
            socket.off("sidebarMessage");
        },
    },
});

