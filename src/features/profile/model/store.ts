import { defineStore } from 'pinia';
import {changeUsername, getProfile, updateProfile, changeAvatar} from '@/features/profile/model/api';
import { Profile } from '@/shared/dtos/dto';

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profile: null as Profile | null,
        loading: false,
        errors: null as string | null,
    }),
    actions: {
        async fetchProfile(): Promise<void> {
            this.loading = true;
            this.errors = null;
            try {
                const data = await getProfile();
                this.setProfile(data.user);
                localStorage.setItem("profileId", this.profile._id);
            } catch (err) {
                this.errors = 'Ошибка при получении профиля';
                console.error(err);
            } finally {
                this.loading = false;
            }
        },
        setProfile(profile: Profile) {
            this.profile = profile;
        },
        clearProfile() {
            this.profile = null;
            localStorage.removeItem("profileId");
        },
        async updateProfile(profile: Partial<Profile>) {
            if(!this.profile){
                throw new Error("Profile not loaded. Please fetch the profile first.");
            }
            this.loading = true;
            this.error = null;
            try{
                const updatedProfile = await updateProfile(profile);
                this.fetchProfile();
                this.setProfile(updatedProfile);
            }catch (err){
                this.error = "Failed to update profile";
                console.error(err);
            }finally {
                this.loading = false;
            }
        },
        async changeUsername(username: string): Promise<void> {
            if(!this.profile){
                throw new Error("Profile not loaded. Please fetch the profile first.");
            }
            this.loading = true;
            this.error = null;
            try{
                const updatedProfile = await changeUsername(username);
                this.fetchProfile();
                this.setProfile(updatedProfile);
            }catch (err){
                this.errors = 'Failed to update profile';
                console.error(err);
            }finally {
                this.loading = false;
            }
        },
        async changeAvatar(file: FormData) {
            if(!this.profile){
                throw new Error("Profile not loaded. Please fetch the profile first.");
            }
            this.loading = true;
            this.error = null;
            try{
                const updatedProfile = await changeAvatar(file);
                this.fetchProfile();
                this.profile.pictureURL = updatedProfile.url;
            }catch (err){
                this.errors = 'Failed to update profile';
            }
            finally {
                this.loading = false;
            }
        }
    },
});
