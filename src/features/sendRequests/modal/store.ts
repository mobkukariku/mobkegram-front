import {defineStore} from "pinia";
import {sendRequest, getSendRequest,} from "./api";
import {FriendUser} from "@/shared/dtos/dto";

export const useSendRequestsStore = defineStore("requests", {
    state: () => ({
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
                console.log(sentReq);
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
    },
});
