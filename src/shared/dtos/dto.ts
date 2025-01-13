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
