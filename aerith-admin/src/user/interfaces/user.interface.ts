//用户定义接口。
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export default class User{
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
