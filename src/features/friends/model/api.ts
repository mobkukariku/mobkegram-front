import axiosInstance from "@/app/providers/api.ts";

export const getFriends = async () => {
    try{
        const response = await axiosInstance.get("friends");
        return response.data.friends;
    }catch (err){
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        }
        throw new Error(
            "Failed to get friends. Please try again."
        )
    }
};
