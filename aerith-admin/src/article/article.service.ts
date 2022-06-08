import { Injectable } from '@nestjs/common';
import Article from './article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, QueryBuilder, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ArticleService {
    constructor(

        @InjectRepository(Article)
        private articleRepository: Repository<Article>,
    
    
      ) {}
    
    getNnumArticles():Promise<Article[]>{
        
        return this.articleRepository
                .createQueryBuilder("article")
                .getMany()
    }


    getArticlesById(uid:number):Promise<Article[]>{
        
        return this.articleRepository
                .createQueryBuilder("article")
                .where("article.uid = :uid",{uid:uid})
                .getMany()
    }
    getArticlesByTemplate(tid:number):Promise<Article[]>{
        
        return this.articleRepository
                .createQueryBuilder("article")
                .where("article.tid = :tid",{tid:tid})
                .getMany()
    }


    addArtice(data:Article){
        return this.articleRepository
                .createQueryBuilder()
                .insert()
                .into(Article)
                .values(data)
                .execute()
    }


    getArticeById(id:number){
        return this.articleRepository.find({
            where:{
                id,
              }
            }
        )
    }

    deleteArticle(id:number){
        return this.articleRepository
        .createQueryBuilder()
        .delete()
        .from(Article)
        .where("id = :id", { id})
        .execute();
    }
}
