import axiosInstance from "../../../app/providers/api";

export const login = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post("auth/login", { email, password });
        return response.data;
    } catch (err) {

        throw new Error("Failed to login. Please try again.");
    }
};


export const register = async (username:string, email: string, password: string) => {
    try{
        const response = await axiosInstance.post("auth/signup", { username, email, password });
        return response.data;
    }catch (err){
        throw new Error(
            "Failed to register. Please try again."
        )
    }
}

export const logOut = async () => {
    try{
        const response = await axiosInstance.post("auth/logout");
        return response.data;
    }catch (err){
        throw new Error("Failed to logout. Please try again.");
    }
}