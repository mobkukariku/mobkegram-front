import {defineStore} from "pinia";
import {login, register} from "./api.ts";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        jwt: null as string | null,
    }),
    actions: {
        async loginAction(email: string, password: string) {
            try {
                const data = await login(email, password);
                this.jwt = data.jwt;
                return data;
            } catch (err) {
                throw new Error(err);
            }
        },
        async registerAction(username:string, email: string, password: string) {
            try{
                const data = await register(username, email, password);
                this.jwt = data.jwt;
                return data;
            } catch (err){
                throw new Error(err);
            }
        }
    },
});
