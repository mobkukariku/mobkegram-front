export interface FriendUser {
    id: number;
    username: string;
    email: string;
    pictureURL: string | null;
    name: string;
}

export interface Profile {
    id: string,
    username: string,
    name: string,
    email: string,
    pictureURL: string,
    friends: string[],
    friendRequests: string[],
    sentRequests: string[]
}


export interface SideBarMessage {
    _id: string;
    id: string;
    pictureURL: string;
    name: string;
    senderName: string;
    content: string;
}

export interface FriendRequest {
    name: string;
    id: string;
    pictureURL: string;
    username: string;
    email: string;
}