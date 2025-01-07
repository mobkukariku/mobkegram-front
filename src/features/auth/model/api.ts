import axiosInstance from "../../../app/providers/api.ts";

export const login = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post("auth/login", { email, password });
        return response.data;
    } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        }
        throw new Error("Failed to login. Please try again.");
    }
};


export const register = async (username:string, email: string, password: string) => {
    try{
        const response = await axiosInstance.post("auth/signup", { username, email, password });
        return response.data;
    }catch (err){
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        }
        throw new Error(
            "Failed to register. Please try again."
        )
    }
}