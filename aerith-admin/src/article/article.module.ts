import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Article from './article.entity';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { CommentModule } from 'src/comment/comment.module';
import { CommentService } from 'src/comment/comment.service';
@Module({
  imports: [TypeOrmModule.forFeature([Article]),UserModule,CommentModule],
  providers: [ArticleService,UserService,CommentService],
  controllers: [ArticleController]
})
export class ArticleModule {}
