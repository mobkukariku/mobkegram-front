import axiosInstance from "@/app/providers/api.ts";
import {Profile} from "@/features/profile/model/dto";

export const getProfile = async (): Promise<Profile> => {
    try{
        const response = await axiosInstance.get("profile");
        return response.data;
    }catch(err){
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        }
        throw new Error("Failed to get profile. Please try again.");
    }
}

export const updateProfile = async (profile: Partial<Profile>): Promise<Profile> => {
    try{
        const response = await axiosInstance.patch("profile", profile);
        return response.data;
    }catch(err){
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        }
        throw new Error("Failed to update profile. Please try again.");
    }
}

export const changeUsername = async (username: string): Promise<Profile> => {
    try{
        const response = await axiosInstance.post("profile/change-username", username);
        return response.data;
    }catch(err){
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        }
        throw new Error("Failed to update profile. Please try again.");
    }
}

