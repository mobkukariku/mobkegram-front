import {getMessages, getUsersForSideBar, sendMessage} from "@/features/chat/model/api";
import {FriendUser} from "@/shared/dtos/dto";

export const useChatStore = defineStore('chat', {
    state: () => ({
        messages: [],
        users: [],
        selectedUsers: null as FriendUser,
        isUserLoading: false,
        isMessageLoading: false,
    }),
    actions: {
        getUsers: async () => {
            this.isUserLoading = true;
            try{
                const data = await getUsersForSideBar();
                this.users = data.users;
            }catch(err){
                console.error(err);
            }finally {
                this.isUserLoading = false;
            }
        },
        getMessages: async (id:string) => {
            this.isMessageLoading = true;
            try{
                const data = await getMessages(id);
                this.messages = data;
            }catch(err){
                console.error(err);
            }finally {
                this.isMessageLoading = false;
            }
        },
        sendMessage: async (message:string) => {
            this.isMessageLoading = true;
            try{
                const data = await sendMessage(this.selectedUsers._id, message);
                this.messages = [...this.messages, ...data];
            }catch(err){
                console.error(err);
            }finally {
                this.isMessageLoading = false;
            }
        }
    }
});