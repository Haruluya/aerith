
import {ApiTags, ApiOperation} from '@nestjs/swagger'
import { JSONRes } from 'src/utils/jsonResInterface';
import Comment from './comment.entity';
import { CommentService } from './comment.service';
import { Body, Controller, Get, Post, UseGuards,Req } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

const jsonRes = new JSONRes()

@ApiTags('Comment')
@Controller('aerithi/comment')
export class CommentController {
    constructor(
        private readonly commentsService:CommentService,
                private readonly userService:UserService,
        ){}

    @ApiOperation({ summary: '根据文章id获取评论' })
    @Post('getCommentByArticleId')
    async getCommentByArticleId(@Body() data:Comment){
        let comments = await this.commentsService.getCommentByArticleId(data.id);

        
        let result = {
            comments:[],
            users:[]
        }
        result.comments = comments;

        for (let i = 0; i<result.comments.length; i++){
            result.comments[i].children = {};
            result.comments[i].children.comments = await this.commentsService.findChilren(result.comments[i].id)
            result.comments[i].children.users = []
            for (let j = 0; j<result.comments[i].children.comments.length; j++){
                result.comments[i].children.users.push(await this.userService.findUserById(result.comments[i].children.comments[j].uid))
            }
        }
        

        for (let i = 0; i<result.comments.length; i++){
            result.users.push(await this.userService.findUserById(result.comments[i].uid))
        }
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
    @ApiOperation({ summary: '修改评论' })
    @Post('updateComment')
    async updateComment(@Body() data:Comment){

    }

    @ApiOperation({ summary: '查看评论详细信息' })
    @Post('getCommentInfo')
    async getCommentInfo(@Body() data:Comment){

    }

    @ApiOperation({ summary: '查看评论属性' })
    @Post('getCommentValue')
    async getCommentValue(@Body() data:Comment){

    }

    @ApiOperation({ summary: '批量删除评论' })
    @Post('deleteBackComment')
    async deleteBackComment(@Body() data:Comment){

    }

    @ApiOperation({ summary: '批量更新评论' })
    @Post('updateBackComment')
    async updateBackComment(@Body() data:Comment){

    }

    @ApiOperation({ summary: '批量添加评论' })
    @Post('addBackComment')
    async addBackComment(@Body() data:Comment){

    }
}
