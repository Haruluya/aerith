import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Comment from './comment.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';



@Module({
  imports: [TypeOrmModule.forFeature([Comment]),UserModule],
  controllers: [CommentController],
  providers: [CommentService,UserService],
  exports: [TypeOrmModule],
})
export class CommentModule {}
