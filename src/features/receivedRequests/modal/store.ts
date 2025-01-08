import {defineStore} from "pinia";
import {getReceivedRequest} from "@/features/receivedRequests/modal/api";


export const useReceivedRequestsStore = defineStore("receivedRequests", {
    state: () => ({
        receivedRequests: null as FriendUser[] | null,
        loading: false,
        errors: null as string | null,
    }),
    actions: {
        async acceptReceivedRequest(requestUsername: string, accept:boolean) {
            this.loading = true;
            this.errors = null;
            try{
                await postReceivedRequest(requestUsername, accept);
            }catch (error) {
                this.errors = "Error sending request";
                console.error(error);
            }finally {
                this.loading = false;
            }
        },
        async fetchReceivedRequest() {
            this.loading = true;
            this.errors = null;
            try{
                const response = await getReceivedRequest();
                this.setReceivedRequest(response);
            }catch (error) {
                this.errors = "Error sending request";
                console.error(error);
            }finally {
                this.loading = false;
            }
        },
        setReceivedRequest(received: FriendUser[]) {
            this.receivedRequests = received;
        }
    }
})