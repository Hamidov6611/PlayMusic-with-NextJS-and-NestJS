import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Track } from './track.schema';
import mongoose, { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment extends Document {
  @Prop()
  username: string;

  @Prop()
  text: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Track'})
  track: Track

}

export const CommentSchema = SchemaFactory.createForClass(Comment);

