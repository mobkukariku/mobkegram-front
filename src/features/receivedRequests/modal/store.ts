import {defineStore} from "pinia";
import {getReceivedRequest, postReceivedRequest} from "@/features/receivedRequests/modal/api";
import {FriendRequest, FriendUser} from "@/shared/dtos/dto";

export const useReceivedRequestsStore = defineStore("receivedRequests", {
    state: () => ({
        receivedRequests: null as FriendRequest[] | null,
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
        setReceivedRequest(received: FriendRequest[]) {
            this.receivedRequests = received;
        }
    }
})