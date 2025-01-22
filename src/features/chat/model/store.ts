import { defineStore } from "pinia";
import {getMessages, getSideBarMessages, getUsersForSideBar, sendMessage} from "@/features/chat/model/api";
import { socket } from "@/app/providers/socket";
import {Message, SideBarMessage} from "@/shared/dtos/dto";

export const useChatStore = defineStore('chat', {
    state: () => ({
        messages: [] as Message[],
        users: [] as Array<{ id: string; name: string; email: string; pictureURL: string }>,
        sideBarMessages: [] as Array<SideBarMessage>,
        currentUser: null as null | {
            _id: string;
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
                console.log(this.currentUser);
                const data = await sendMessage(this.currentUser._id, message);
                this.messages.push(data.message);
            } catch (err) {
                console.error(err);
            }
        },
        setUser(user: { _id: string; name: string; email: string; pictureURL: string }) {
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

            // Удаляем предыдущую подписку перед созданием новой
            socket.off("newMessage");

            socket.on("newMessage", (newMessage) => {
                if (
                    newMessage.receiverID === this.currentUser?._id ||
                    newMessage.senderID === this.currentUser?._id
                ) {
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
        setSideBarMessages(sideBarMessages:SideBarMessage[]) {
            this.sideBarMessages = sideBarMessages;
        },
    },
});

