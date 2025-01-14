import { io } from "socket.io-client";
import { useProfileStore } from "@/features/profile/model/store";

export const socket = io("http://localhost:5001", {
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
