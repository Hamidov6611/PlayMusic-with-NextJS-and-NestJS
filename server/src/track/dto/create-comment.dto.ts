import { ObjectId } from "mongoose";

export class CreateCommentDto {
    username: string;
    text: string;
    trackId: ObjectId;
}