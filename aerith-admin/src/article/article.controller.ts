import { ArticleService } from './article.service';
import { Body, Controller, Get, Post, UseGuards,Req } from '@nestjs/common';
import {ApiTags, ApiOperation} from '@nestjs/swagger'
import { JSONRes } from 'src/utils/jsonResInterface';
import { Request } from 'express'
import { ArticleRequest } from './dto/article-dto';
import Article from './article.entity';
import { UserService } from 'src/user/user.service';
const jsonRes = new JSONRes()

@ApiTags('Article')
@Controller('aerithi/article')
export class ArticleController {
    constructor(
        private readonly articleService:ArticleService,
        private readonly userService:UserService,
    ){}

    @ApiOperation({ summary: '读取n个文章数据' })
    @Post('getArticleData')
    async getArticleData(@Body() data:ArticleRequest){
        let articles = await this.articleService.getNnumArticles();
        let result = {
            articles:[],
            users:[]
        };
        result.articles = articles.slice(articles.length- data.articleNum,articles.length);
        result.articles.reverse();
        for (let i = 0; i<result.articles.length; i++){
            result.users.push(await this.userService.findUserById(result.articles[i].uid))
        }
        return jsonRes._success({
            result
        })
    }

    @ApiOperation({ summary: '根据用户id获取文章数据' })
    @Post('getArticleDataById')
    async getArticleDataById(@Body() data:ArticleRequest){
        let result = await this.articleService.getArticlesById(data.uid);
        return jsonRes._success({
            result
        })
    }

    @ApiOperation({ summary: '根据板块id获取文章数据' })
    @Post('getArticleDataByTemplate')
    async getArticleDataByTemplate(@Body() data:ArticleRequest){
        let articles = await this.articleService.getArticlesByTemplate(data.tid);
        let result = {
            articles:[],
            users:[]
        };
        result.articles = articles
        for (let i = 0; i<result.articles.length; i++){
            result.users.push(await this.userService.findUserById(result.articles[i].uid))
        }
        return jsonRes._success({
            result
        })
    }

    @ApiOperation({ summary: '添加文章' })
    @Post('addArticle')
    async addArticle(@Body() data:Article){
        await this.articleService.addArtice(data);
        return jsonRes._success({
        })
    }

    @ApiOperation({ summary: '根据文章id获取文章数据' })
    @Post('getArticleById')
    async getArticleById(@Body() data:Article){
        let result = {
            article:{},
            user:{}
        }
        result.article = await this.articleService.getArticeById(data.id);
        result.user = await this.userService.findUserById(result.article[0].uid)
        
        return jsonRes._success({
            result
        })
    }

    @ApiOperation({ summary: '删除文章' })
    @Post('deleteArticle')
    async deleteArticle(@Body() data:Article){
        await this.articleService.deleteArticle(data.id);
        return jsonRes._success({
        })
    }



}
