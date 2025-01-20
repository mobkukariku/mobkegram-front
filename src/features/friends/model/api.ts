import axiosInstance from "@/app/providers/api";

export const getFriends = async () => {
    try{
        const response = await axiosInstance.get("friends");
        return response.data.friends;
    }catch (err){
        throw new Error(
            "Failed to get friends. Please try again."
        )
    }
};
