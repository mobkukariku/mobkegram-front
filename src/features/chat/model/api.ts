import axiosInstance from "@/app/providers/api";

export const getUsersForSideBar = async () => {
    try{
        const response = await axiosInstance.get("/api/messages/users");
        return response.data;
    }catch(err){
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        }
        throw new Error(
            "Failed to get users. Please try again."
        )
    }
}

export const getMessages = async (id:string) => {
    try{
        const response = await axiosInstance.get(`/api/messages/${id}`);
        return response.data;
    }catch(err){
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        }
        throw new Error(
            "Failed to get messages. Please try again."
        )
    }
}

export const sendMessage = async (message:string, id:string) => {
    try{
        const response = await axiosInstance.post(`/api/messages/${id}`, message);
        return response.data;
    }catch(err){
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        }
        throw new Error(
            "Failed to get messages. Please try again."
        )
    }
}