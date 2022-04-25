import { Body, Controller, Get, Post } from '@nestjs/common';
import {ApiTags, ApiOperation} from '@nestjs/swagger'
import {LoginData,TokenData} from './interfaces/user.interface'
import { JSONRes } from 'src/utils/jsonResInterface';

import { UserService } from './user.service';


const jsonRes = new JSONRes()

@ApiTags('User')
@Controller('aerithi/user')
export class UserController {
    constructor(
        private readonly userService:UserService,
    ){}



    @ApiOperation({ summary: 'Hello' })
    @Post('hello')
    getHello(){
        const data = this.userService.findAll();
        return data;
    }

    @ApiOperation({ summary: '处理用户登录请求' })
    @Post('loginConfirm')
    loginConfirm(@Body() data:LoginData){
        return jsonRes._success({
            token:'123456'
        })
    }

    @ApiOperation({ summary: '处理用户登录请求' })
    @Post('userData')
    userData(@Body() data:TokenData){
        return jsonRes._success({
            userData:{
                nickName:'haruluya',
                headPortrait: '',
            }
        })
    }

}


