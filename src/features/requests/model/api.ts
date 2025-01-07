import axiosInstance from "@/app/providers/api";

export const sendRequest = async (targetUsername: string) => {
    try{
        const response = await axiosInstance.post("requests/send-friend-request", {
            targetUsername: targetUsername
        });
        console.log(response.data);
        return response.data;
    }catch (err){
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        }
        throw new Error(
            "Failed to add friends. Please try again."
        )
    }
}

export const getSendRequest = async () => {
    try{
        const response = await axiosInstance.get("requests/getReceivedRequests");
        return response.data.requests;
    }catch (err){
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        }
        throw new Error("Failed to get requests. Please try again.")
    }
}

export const getReceivedRequest = async() => {
    try{
        const response = await axiosInstance.get("requests/getReceivedRequests");
        return response.data.requests;
    }catch (err){
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        }
        throw new Error("Failed to get requests. Please try again.")
    }
}
