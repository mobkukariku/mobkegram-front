export interface FriendUser {
    _id: string;
    username: string;
    email: string;
    pictureURL: string | null;
    name: string;
}

export interface Profile {
    _id: string,
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
    _id: string;
    pictureURL: string;
    username: string;
    email: string;
}

export interface Message {
    _id: string;
    content: string;
    senderID: string;
    receiverID: string
}
