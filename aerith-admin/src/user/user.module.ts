import { Module } from '@nestjs/common';
// import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
// import { usersProviders } from './user.providers';
import { UserService } from './user.service';
// 数据库。
import { TypeOrmModule } from '@nestjs/typeorm';
import  User from './user.entity';
// user模块的整体配置。
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    UserService,
  ],
  exports: [TypeOrmModule],
})


export class UserModule {}
