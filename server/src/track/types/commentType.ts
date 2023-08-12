import mongoose from "mongoose";
import { Track } from "../schemas/track.schema";

export interface CommentType {
    _id?: mongoose.Schema.Types.ObjectId,
    username: string,
    text: string,
    track: Track
}
