import { io } from "socket.io-client";
import { useProfileStore } from "@/features/profile/model/store";

export const socket = io(import.meta.env.VITE_BACKEND_SOCKET, {
    autoConnect: false,
});

export const socketConnect = () => {
    const profileStore = useProfileStore();
    const userId =  profileStore.profile?._id || localStorage.getItem("profileId");
    if (!userId) {
        console.log("no user");
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
