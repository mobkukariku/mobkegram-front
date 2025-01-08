import axiosInstance from "@/app/providers/api";

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


export const postReceivedRequest = async(requestUsername: string, accept:boolean) => {
    try{
        const response = await axiosInstance.post("requests/accept-friend-request", {
            requestUsername: requestUsername,
            accept: accept,
        });
        return response.data;
    }catch (err){
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        }
        throw new Error("Failed to post requests. Please try again.")
    }
}