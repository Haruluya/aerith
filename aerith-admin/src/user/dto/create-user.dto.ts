import {  IsString } from 'class-validator';

export class CreateUserDto {

  id: Number;
  @IsString()
  nickName: string;
}

// 获取用户信息请求体。
export class LoginMobileData{

  mobile:string
}


export class FoundData{
  newpassword:string;
  mobile:string;
}