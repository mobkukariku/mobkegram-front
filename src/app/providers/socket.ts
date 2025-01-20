import { io } from "socket.io-client";
import { useProfileStore } from "@/features/profile/model/store";

export const socket = io("https://mobkegram-back-production.up.railway.app/", {
    autoConnect: false, // Prevents auto-connection on import
});

export const socketConnect = () => {
    const profileStore = useProfileStore();
    const userId = profileStore.profile?._id || localStorage.getItem("profileId");

    if (!userId) {
        return;
    }

    socket.io.opts.query = { userId };
    socket.connect();

};

export const socketDisconnect = () => {
    if (socket.connected) {
        socket.disconnect();
    }
};
