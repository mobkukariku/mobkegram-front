import { defineStore } from 'pinia';
import { getProfile, updateProfile } from '@/features/profile/model/api';
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
                console.log(data);
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
        }
    },
});
