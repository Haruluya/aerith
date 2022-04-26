import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';


import User from 'src/user/user.entity';

// jwt验证。
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(

    private readonly jwtService:JwtService,

  ) {}


  //基于nest-jwt，通过user创建token。 
  async getToken(user:User){
    return this.jwtService.sign(user);
  }

}
