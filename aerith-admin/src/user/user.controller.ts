import { Body, Controller, Get, Post } from '@nestjs/common';
import {ApiTags, ApiOperation} from '@nestjs/swagger'
import {User,LoginData,TokenData} from './interfaces/user.interface'
import { JSONResSuccess } from 'src/utils/jsonResInterface';
@ApiTags('User')
@Controller('aerithi/user')
export class UserController {
    @ApiOperation({ summary: 'Hello' })
    @Post('hello')
    getHello(@Body() user:User){
        return "hello";
    }

    @ApiOperation({ summary: '处理用户登录请求' })
    @Post('loginConfirm')
    loginConfirm(@Body() data:LoginData){
        return JSONResSuccess(200,'ok',{token:'123456'})
    }

    @ApiOperation({ summary: '处理用户登录请求' })
    @Post('userData')
    userData(@Body() data:TokenData){
        return JSONResSuccess(200,'ok',{userData :{
            nickName:'haruluya',
            headPortrait:''
        }})
    }

}


