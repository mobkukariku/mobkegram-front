import axiosInstance from "@/app/providers/api";
import {Profile} from "@/shared/dtos/dto";

export const getProfile = async (): Promise<Profile> => {
    try{
        const response = await axiosInstance.get("profile");
        return response.data.user;
    }catch(err){
        throw new Error("Failed to get profile. Please try again.");
    }
}

export const updateProfile = async (profile: Partial<Profile>): Promise<Profile> => {
    try{
        const response = await axiosInstance.patch("profile", profile);
        return response.data;
    }catch(err){
        throw new Error("Failed to update profile. Please try again.");
    }
}

export const changeUsername = async (username: string): Promise<Profile> => {
    try{
        const response = await axiosInstance.post("profile/change-username", username);
        return response.data;
    }catch(err){
        throw new Error("Failed to update profile. Please try again.");
    }
}

export const changeAvatar = async (formData: FormData)=> {
    try{
        const response = await axiosInstance.post('profile/change-avatar', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        return response.data;
    }catch(err){
        throw new Error("Failed to update profile. Please try again.");
    }
}