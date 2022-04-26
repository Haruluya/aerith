import { Body, Controller, Get, Post, UseGuards  } from '@nestjs/common';
import {ApiTags, ApiOperation} from '@nestjs/swagger'
import {LoginData,TokenData,RegisterData} from './interfaces/user.interface'
import { JSONRes } from 'src/utils/jsonResInterface';
import { UserService } from './user.service';

//密码加密。
import {encryptPassword,makeSalt} from '../utils/cryptogram'
import { AuthService } from 'src/auth/auth.service';

import { JwtAuthGuard } from 'src/auth/JwtAuthGuard';

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
        //用户是否存在。
        const user = (await this.userService.findUserByPhone(data.phone))[0];
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
            name:user.name,
            phone:user.phone,
            password:user.password,
            salt:user.salt
        });
        return jsonRes._success({
            token
        })
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


    @ApiOperation({ summary: '用户注册' })
    @Post('register')
    async registerConfirm(@Body() data:RegisterData){
        // 验证是否存在。
        const user = await this.userService.findUserByPhone(data.phone)[0];
        if (user){
            return jsonRes._error(400,`${data.phone}用户已经存在！`)
        }

        // 加密密码并存入数据库。
        const salt = makeSalt(); 
        const hashPwd = encryptPassword(data.password, salt);  
        this.userService.addUser({
            name:data.name,
            password:hashPwd,
            phone:data.phone,
            salt,
        })

        return jsonRes._success({})
    }

}


