//用户定义接口。
import { Document } from 'mongoose';

export interface User extends Document{
    id:Number,
    nickName: String,
    // birthDay?: Date,
    // password: String,
    // signature?: String,
    // email?: String,
    // phone?: String
}
