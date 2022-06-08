import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, QueryBuilder, Repository, UpdateResult } from 'typeorm';
import Comment from './comment.entity';

@Injectable()
export class CommentService {
    constructor(

        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>,
    
    
      ) {}

    getCommentByArticleId(aid:number){
        return this.commentRepository
            .createQueryBuilder("comment")
            .where("comment.aid",{aid})
            .getMany()
    }

    addComment(data:Comment){
        return this.commentRepository
            .createQueryBuilder()
            .insert()
            .into(Comment)
            .values(data)
            .execute()
    }

    getCommentByUser(uid:number){
        return this.commentRepository
            .createQueryBuilder("comment")
            .where("comment.uid",{uid})
            .getMany()
    }

    deleteComment(id:number){
        return this.commentRepository
            .createQueryBuilder()
            .delete()
            .from(Comment)
            .where("id = :id", { id})
            .execute();
    }
}
