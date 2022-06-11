import Tag from './Tag.entity';
import {ApiTags, ApiOperation} from '@nestjs/swagger'
import { Body, Controller, Get, Post, UseGuards,Req } from '@nestjs/common';
import { JSONRes } from 'src/utils/jsonResInterface';
@Controller('aerith/Tags')
@ApiTags('Tags')
export class TagsController {

    @ApiOperation({ summary: '添加标签' })
    @Post('addTagFocus')
    async addTagFocus(@Body() data:Tag){
 
    }
    @ApiOperation({ summary: '删除标签' })
    @Post('deleteTagFocus')
    async deleteTagFocus(@Body() data:Tag){

    }
    @ApiOperation({ summary: '根据id查看标签信息' })
    @Post('getTagFocusById')
    async getTagFocusById(@Body() data:Tag){

        
    }

    @ApiOperation({ summary: '根据id查看标签详细信息' })
    @Post('getTagFanById')
    async getTagFanById(@Body() data:Tag){

        
    }


    @ApiOperation({ summary: '修改标签' })
    @Post('updateFocus')
    async updateFocus(@Body() data:Tag){

    }

    @ApiOperation({ summary: '查看标签详细信息' })
    @Post('getFocusInfo')
    async getFocusInfo(@Body() data:Tag){

    }

    @ApiOperation({ summary: '查看标签属性' })
    @Post('getFocusValue')
    async getFocusValue(@Body() data:Tag){

    }

    @ApiOperation({ summary: '批量删除标签' })
    @Post('deleteBackFocus')
    async deleteBackFocus(@Body() data:Tag){

    }

    @ApiOperation({ summary: '批量更新标签' })
    @Post('updateBackFocus')
    async updateBackFocus(@Body() data:Tag){

    }

    @ApiOperation({ summary: '批量添加标签' })
    @Post('addBack标签')
    async addBackFocus(@Body() data:Tag){

    }
}
