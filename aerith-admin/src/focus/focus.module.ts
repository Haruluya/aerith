import { Module } from '@nestjs/common';
import { FocusController } from './focus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FocusService } from './focus.service';
import FocusUser from './focus_user.entity';
import FocusArticle from './focus_article.entity';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';


@Module({
  imports: [TypeOrmModule.forFeature([FocusUser,FocusArticle]),
    UserModule],
  controllers: [FocusController],
  providers: [
    FocusService,
    UserService
  ],
})
export class FocusModule {}
