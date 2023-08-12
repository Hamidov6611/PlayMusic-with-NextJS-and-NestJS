import { ObjectId } from "mongoose";

export interface TrackType {
    name: string,
    artist: string,
    track: string,
    listens: number,
    picture: string,
    audio: string,
    comments: Comment[],
}
