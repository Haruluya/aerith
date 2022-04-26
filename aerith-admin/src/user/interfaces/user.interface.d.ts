//用户定义接口。
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

// export class User{
//     @ApiProperty()
//     id:Number;
//     @ApiProperty()
//     nickName: String;
//     // birthDay?: Date,
//     // password: String,
//     // signature?: String,
//     // email?: String,
//     // phone?: String
// }

// 前端请求接口。
class ErrorInfoStructure {
    success: boolean; // if request is success
    data?: any; // response data
    errorCode?: string; // code for errorType
    errorMessage?: string; // message display to user 
    showType?: number; // error display type： 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
    traceId?: string; // Convenient for back-end Troubleshooting: unique request ID
    host?: string; // Convenient for backend Troubleshooting: host of current access server
  }

// 用户登录请求体。
export class LoginData{
    @ApiProperty()
    phone:string;
    @ApiProperty()
    password:string;
}

// 获取用户信息请求体。
export class TokenData{
    @ApiProperty()
    token:string

}


// 用户注册请求体。
export class RegisterData{
    @ApiProperty()
    name:string;
    @ApiProperty()
    password:string;
    @ApiProperty()
    phone:string;
}


