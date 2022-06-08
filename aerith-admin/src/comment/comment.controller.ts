
import {ApiTags, ApiOperation} from '@nestjs/swagger'
import { JSONRes } from 'src/utils/jsonResInterface';
import Comment from './comment.entity';
import { CommentService } from './comment.service';
import { Body, Controller, Get, Post, UseGuards,Req } from '@nestjs/common';


const jsonRes = new JSONRes()

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
    constructor(
        private readonly commentsService:CommentService,
    ){}

    @ApiOperation({ summary: '根据文章id获取评论' })
    @Post('getCommentByArticleId')
    async getCommentByArticleId(@Body() data:Comment){
        let result = await this.commentsService.getCommentByArticleId(data.aid);
        return jsonRes._success({
            result
        })
    }

    @ApiOperation({ summary: '添加评论' })
    @Post('addComment')
    async addComment(@Body() data:Comment){
        let result = await this.commentsService.addComment(data);
        return jsonRes._success({
        })
    }

    @ApiOperation({ summary: '根据用户获取评论' })
    @Post('getCommentByUser')
    async getCommentByUser(@Body() data:Comment){
        let result = await this.commentsService.getCommentByUser(data.uid);
        return jsonRes._success({
            result
        })
    }

    @ApiOperation({ summary: '删除评论' })
    @Post('deleteComment')
    async deleteComment(@Body() data:Comment){
        let result = await this.commentsService.deleteComment(data.id);
        return jsonRes._success({
        })
    }

}
