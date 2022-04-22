import {  IsString } from 'class-validator';

export class CreateUserDto {

  id: Number;
  @IsString()
  nickName: string;
}