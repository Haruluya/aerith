import { FocusService } from './focus.service';
import {ApiTags, ApiOperation} from '@nestjs/swagger'
import { Body, Controller, Get, Post, UseGuards,Req } from '@nestjs/common';
import FocusArticle from './focus_article.entity';
import FocusUser from './focus_user.entity';
import { JSONRes } from 'src/utils/jsonResInterface';
import { UserService } from 'src/user/user.service';

const jsonRes = new JSONRes()
@ApiTags('focus')
@Controller('focus')
export class FocusController {
    constructor(
        private readonly focucService:FocusService,
        private readonly userService:UserService
    ){}

    @ApiOperation({ summary: '添加用户关注' })
    @Post('addUserFocus')
    async addUserFocus(@Body() data:FocusUser){
        let result = await this.focucService.addUserFocus(data);
        return jsonRes._success({
        })
    }

    @ApiOperation({ summary: '根据id查看用户关注用户信息' })
    @Post('getUserFocusById')
    async getUserFocusById(@Body() data:FocusUser){
        let focus = await this.focucService.getUserFocusById(data.uid);
        let result = [];
        
        for (let i = 0; i < focus.length; i++){
            result.push(await this.userService.findUserById(focus[i].fuid));
        }

        return jsonRes._success({
            result
        })
        
    }

    @ApiOperation({ summary: '根据id查看用户粉丝信息' })
    @Post('getUserFanById')
    async getUserFanById(@Body() data:FocusUser){
        let focus = await this.focucService.getUserFanById(data.uid);
        let result = [];
        
        for (let i = 0; i < focus.length; i++){
            result.push(await this.userService.findUserById(focus[i].uid));
        }

        return jsonRes._success({
            result
        })
        
    }


}
