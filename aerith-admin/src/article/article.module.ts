import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Article from './article.entity';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
@Module({
  imports: [TypeOrmModule.forFeature([Article]),UserModule],
  providers: [ArticleService,UserService],
  controllers: [ArticleController]
})
export class ArticleModule {}
