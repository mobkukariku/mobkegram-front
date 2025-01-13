import {defineStore} from "pinia";
import {login, logOut, register} from "./api.ts";
import {socketDisconnect} from "@/app/providers/socket";


export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,
        isConnected: false,
        onlineUsers: [],
        socket: null,
    }),
    actions: {
        async loginAction(email: string, password: string) {
            try {
                const data = await login(email, password);
                this.isAuthenticated = true;
                this.profileUser = data.user;
                localStorage.setItem("auth", this.isAuthenticated.toString());
                window.location.href = "/main";
                return data;
            } catch (err) {
                throw new Error(err);
            }
        },
        async registerAction(username:string, email: string, password: string) {
            try{
                const data = await register(username, email, password);
                this.isAuthenticated = true;
                this.profileUser = data.user;
                localStorage.setItem("auth", this.isAuthenticated);
                return data;
            } catch (err){
                throw new Error(err);
            }
        },
        async logoutAction() {
            console.log("logoutAction called");
                console.log("Logging out...");
                localStorage.removeItem("auth");
                localStorage.removeItem("profileId");
                const response = await logOut();
                socketDisconnect();
                this.isAuthenticated = false;
                setTimeout(() => {
                    window.location.href = '/login';
                }, 1000);
        },
    },
});
