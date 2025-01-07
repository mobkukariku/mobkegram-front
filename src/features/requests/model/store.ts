import {defineStore} from "pinia";
import {sendRequest, getSendRequest, getReceivedRequest} from "./api";

export const useRequestsStore = defineStore("requests", {
    state: () => ({
        receivedRequests: null as FriendUser[] | null,
        sentRequests: null as FriendUser[] | null,
        loading: false,
        errors: null as string | null,
    }),
    actions: {
        async doSentRequest(targetUsername: string): Promise<void> {
            this.loading = true;
            this.errors = null;
            try {
                await sendRequest(targetUsername);
                console.log("Request sent successfully");
            } catch (error) {
                this.errors = "Error sending request";
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        async fetchSentRequests(): Promise<void> {
            this.loading = true;
            this.errors = null;
            try {
                const sentReq = await getSendRequest();
                this.setSentRequests(sentReq);
            } catch (error) {
                this.errors = "Error fetching friends";
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        setSentRequests(sentReqs: FriendUser[]): void {
            this.sentRequests = sentReqs;
        },
        async fetchReceivedRequests(): Promise<void> {
            this.loading = true;
            this.errors = null;
            try {
                const recReq = await getReceivedRequest();
                this.setReceivedReq(recReq);
            } catch (error) {
                this.errors = "Error fetching friends";
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        setReceivedReq(receivedReqs: FriendUser[]): void {
            this.receivedRequests = receivedReqs;
        },
    },
});
