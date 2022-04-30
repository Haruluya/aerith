import { Body, Controller, Get, Post, UseGuards,Req } from '@nestjs/common';
import {ApiTags, ApiOperation} from '@nestjs/swagger'
import {LoginData,TokenData,RegisterData} from './interfaces/user.interface'
import { JSONRes } from 'src/utils/jsonResInterface';
import { UserService } from './user.service';
import { Request } from 'express'

//密码加密。
import {encryptPassword,makeSalt} from '../utils/cryptogram'
import { AuthService } from 'src/auth/auth.service';

import { JwtAuthGuard } from 'src/auth/JwtAuthGuard';
import User from './user.entity';

const jsonRes = new JSONRes()

@ApiTags('User')
@Controller('aerithi/user')
export class UserController {
    constructor(
        private readonly userService:UserService,
        private readonly authService:AuthService
    ){}


    @UseGuards(JwtAuthGuard) // 使用 'JWT' 进行验证
    @ApiOperation({ summary: 'Hello' })
    @Post('hello')
    getHello(){
        return
    }

    @ApiOperation({ summary: '用户登录' })
    @Post('loginConfirm')
    async loginConfirm(@Body() data:LoginData){
        console.log(data);
        //用户是否存在。
        // 账号密码登录。
        let user:User = null;
        if (data.username){
            user = (await this.userService.findUserByName(data.username))[0];
        }
        // 手机号登录。
        else if (data.mobile){
            user = (await this.userService.findUserByMobile(data.mobile))[0];
        }
        if(!user){
            return jsonRes._error(400,'用户不存在！');
        }
        // 加密验证密码。
        const salt = user.salt; 
        const hashPwd = encryptPassword(data.password, salt);  
        console.log(hashPwd)
        if(hashPwd != user.password){
            return jsonRes._error(400,'密码错误！');
        }
        // 登录成功返回token。
        const token = await this.authService.getToken({
            id : user.id,
            username:user.username,
            mobile:user.mobile,
            password:user.password,
            salt:user.salt
        });
        return jsonRes._success({
            token
        })
    }


    @ApiOperation({ summary: '获取用户信息' })
    @UseGuards(JwtAuthGuard)
    @Post('userData')
    async userData(@Req() request: Request){  
        if (!request.user){
            return jsonRes._error(400,"未知错误！")
        }
        if (!request.user.username){
            return jsonRes._success({
                userData: {
                    username: "",
                }
            })
        }
        const user = (await this.userService.findUserByName(request.user.username))[0];
        console.log(user)
        return jsonRes._success({
            userData: {
                id: user.id,
                username: user.username,
                nickname: user.nickname,
                avatar: user.avatar,
                email:user.email,
                level: user.level,
                mobile: user.mobile,
                role: user.role,
                score: user.score,
                tags: user.tags,
                signature: user.signature,
            }
        })
    }


    @ApiOperation({ summary: '用户注册' })
    @Post('registerConfirm')
    async registerConfirm(@Body() data:RegisterData){
        // 验证是否存在。
        const user = (await this.userService.findUserByName(data.username))[0];
        if (user){
            return jsonRes._error(400,`${data.mobile}用户已经存在！`)
        }

        // 加密密码并存入数据库。
        const salt = makeSalt(); 
        const hashPwd = encryptPassword(data.password, salt);  
        this.userService.addUser({
            username:data.username,
            password:hashPwd,
            mobile:data.mobile,
            avatar:data.avatar,
            salt,
        })

        return jsonRes._success({})
    }

}


