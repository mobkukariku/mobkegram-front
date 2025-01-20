import axiosInstance from "@/app/providers/api";

export const getUsersForSideBar = async () => {
    try{
        const response = await axiosInstance.get("messages/users");
        return response.data;
    }catch(err){
        throw new Error(
            "Failed to get users. Please try again."
        )
    }
}

export const getMessages = async (id:string) => {
    try{
        const response = await axiosInstance.get(`messages/${id}`);
        return response.data;
    }catch(err){
        throw new Error(
            "Failed to get messages. Please try again."
        )
    }
}

export const sendMessage = async (id:string, message:string) => {
    try{
        const response = await axiosInstance.post(`messages/send/${id}`, {message});
        return response.data;
    }catch(err){
        throw new Error(
            "Failed to get messages. Please try again."
        )
    }
}

export const getSideBarMessages = async () => {
    try{
        const response = await axiosInstance.get("messages/users");
        return response.data;
    }catch(err){
        throw new Error(
            "Failed to get users. Please try again."
        )
    }
}