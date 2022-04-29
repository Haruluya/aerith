import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';
import { FocusModule } from './focus/focus.module';




@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot(),
    AuthModule,
    ArticleModule,
    CommentModule,
    FocusModule,],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {
  constructor(private readonly connection: Connection) {
    
  }
}
