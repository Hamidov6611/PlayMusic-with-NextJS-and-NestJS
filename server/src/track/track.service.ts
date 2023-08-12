import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { TrackType } from "./types/trackType";
import mongoose, { Model, ObjectId } from "mongoose";
import { CreateTrackDto } from "./dto/create-track.dto";
import { Track } from "./schemas/track.schema";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { Comment } from "./schemas/comment.schema";
import { FileService, FileType } from "src/file/file.service";

@Injectable()
export class TrackService {
    constructor(@InjectModel('Track') private trackModel: Model<TrackType>,
    @InjectModel('Comment') private commentModel: Model<Comment>,
    private fileService: FileService
    ){}

    async create(dto: CreateTrackDto, picture, audio): Promise<TrackType>{
       const audioPath =  this.fileService.createFile(FileType.AUDIO, audio)
       const picturePath =  this.fileService.createFile(FileType.IMAGE, picture)
        const track = await this.trackModel.create({...dto, listens: 0, audio: audioPath, picture: picturePath})
        return track
    }

    async getAll(count = 10, page = 0): Promise<TrackType[]>{
        const track = await this.trackModel.find().skip(Number(page)).limit(Number(count))
        const num = track.length
        return track
    }

    
    async getOne(id: Object): Promise<TrackType> {
        const track = await this.trackModel.findById(id).populate('comments')

        return track
    }

    async delete(id: Object): Promise<TrackType> {
        const track = await this.trackModel.findByIdAndDelete(id)
        return track
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(dto.trackId)
        const comment = await this.commentModel.create({...dto})
        track.comments.push(comment._id)
        await track.save()
        return comment
    }

    async listen(id: ObjectId) {
        const track = await this.trackModel.findById(id)
        track.listens += 1
        track.save()
    }

    async search(query: string): Promise<TrackType[]> {
        const track = await this.trackModel.find({name: {$regex: new RegExp(query, 'i')}})
        return track
    }
}