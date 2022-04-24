//用户定义接口。
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class User{
    @ApiProperty()
    id:Number;
    @ApiProperty()
    nickName: String;
    // birthDay?: Date,
    // password: String,
    // signature?: String,
    // email?: String,
    // phone?: String
}

// 用户登录请求体。
export class LoginData{
    @ApiProperty()
    phone:Number;
    @ApiProperty()
    password:string;
}

// 获取用户信息请求体。
export class TokenData{
    @ApiProperty()
    token:string

}