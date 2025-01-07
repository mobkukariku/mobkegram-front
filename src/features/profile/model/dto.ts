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
