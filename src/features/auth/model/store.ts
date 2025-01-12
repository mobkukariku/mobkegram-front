import {defineStore} from "pinia";
import {login, logOut, register} from "./api.ts";
import socket from "@/app/providers/socket";
import router from "@/app/providers/router";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,
        isConnected: false,
    }),
    actions: {
        async loginAction(email: string, password: string) {
            try {
                const data = await login(email, password);
                this.isAuthenticated = true;
                this.socketConnect();
                localStorage.setItem("auth", this.isAuthenticated.toString());
                setTimeout(() => {
                    router.push({ name: "Main" });
                }, 3000);
                return data;
            } catch (err) {
                throw new Error(err);
            }
        },
        async registerAction(username:string, email: string, password: string) {
            try{
                const data = await register(username, email, password);
                this.isAuthenticated = true;
                this.socketConnect();
                localStorage.setItem("auth", this.isAuthenticated);
                return data;
            } catch (err){
                throw new Error(err);
            }
        },
        async logoutAction() {
            console.log("logoutAction called");
                console.log("Logging out...");
                this.socketDisconnect();
                localStorage.removeItem("auth");
                const response = await logOut();
                this.isAuthenticated = false;
                setTimeout(() => {
                    window.location.href = '/login';
                }, 1000);
        },
        socketConnect(){
            if(!socket.connected){
                socket.connect();
            }
        },
        socketDisconnect(){
          if(socket.connected){
              socket.disconnect();
          }
        }
    },
});
