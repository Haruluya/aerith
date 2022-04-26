import { Body, Controller, Get, Post } from '@nestjs/common';
import {ApiTags, ApiOperation} from '@nestjs/swagger'
import {LoginData,TokenData,RegisterData} from './interfaces/user.interface'
import { JSONRes } from 'src/utils/jsonResInterface';

import { UserService } from './user.service';

//密码加密。
import {encryptPassword,makeSalt} from '../utils/cryptogram'

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
        const user = this.userService.findAll()
        return user;
    }

    @ApiOperation({ summary: '用户登录' })
    @Post('loginConfirm')
    loginConfirm(@Body() data:LoginData){
        //用户是否存在。
        const user = this.userService.findOne('1');
        console.log(user)
        if(!user){
            return jsonRes._error(400,'用户不存在');
        }
        // 加密验证密码。
        const salt = makeSalt(); 
        const hashPwd = encryptPassword(data.password, salt);  
        return jsonRes._success(user)
    }

    @ApiOperation({ summary: '获取用户信息' })
    @Post('userData')
    userData(@Body() data:TokenData){
        return jsonRes._success({
            userData:{
                nickName:'haruluya',
                headPortrait: '',
            }
        })
    }

    @ApiOperation({ summary: '获取用户信息' })
    @Post('userData')
    registerConfirm(@Body() data:RegisterData){
        // 验证是否存在。
        const user = this.userService.findUserByPhone(data.phone);
        if (user){
            jsonRes._error(400,`${data.phone}用户已经存在！`)
        }

        // 加密密码并存入数据库。
        const salt = makeSalt(); 
        const hashPwd = encryptPassword(data.password, salt);  
        this.userService.addUser(data)

        return jsonRes._success({})
    }

}


