import { Module } from '@nestjs/common';
// import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
// import { usersProviders } from './user.providers';
import { UserService } from './user.service';
// 数据库。
import { TypeOrmModule } from '@nestjs/typeorm';
import  User from './user.entity';

// jwt.

import { AuthModule } from 'src/auth/auth.module';
import { JwtService } from '@nestjs/jwt';


// user模块配置。
@Module({
  imports: [TypeOrmModule.forFeature([User]),
            AuthModule],
  controllers: [UserController],
  providers: [
    UserService,
  ],
  exports: [TypeOrmModule],
})


export class UserModule {}
