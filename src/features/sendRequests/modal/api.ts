import axiosInstance from "@/app/providers/api";
export const sendRequest = async (targetUsername: string) => {
    try{
        const response = await axiosInstance.post("requests/send-friend-request", {
            targetUsername: targetUsername
        });
        console.log(response.data);
        return response.data;
    }catch (err) {
        throw new Error(
            "Failed to add friends. Please try again."
        )
    }
}

export const getSendRequest = async () => {
    try{
        const response = await axiosInstance.get("requests/getSentRequests");
        return response.data.requests;
    }catch (err){
        throw new Error("Failed to get requests. Please try again.")
    }
}
