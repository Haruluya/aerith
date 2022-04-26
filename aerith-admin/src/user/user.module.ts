import { Module } from '@nestjs/common';
// import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
// import { usersProviders } from './user.providers';
import { UserService } from './user.service';
// 数据库。
import { TypeOrmModule } from '@nestjs/typeorm';
import  User from './user.entity';

// jwt.
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { PassportModule } from '@nestjs/passport';


// user模块配置。
@Module({
  imports: [TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.accessTokenExpiresIn },
    }),],
  controllers: [UserController],

  providers: [
    UserService,
  ],
  exports: [TypeOrmModule],
})


export class UserModule {}
