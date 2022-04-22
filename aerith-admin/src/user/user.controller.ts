import { Body, Controller, Get, Post } from '@nestjs/common';
import {ApiTags, ApiOperation} from '@nestjs/swagger'
import User from './interfaces/user.interface'

@ApiTags('User')
@Controller('user')
export class UserController {
    @ApiOperation({ summary: 'Hello' })
    @Post('hello')
    getHello(@Body() user:User){
        return "hello";
    }
}
