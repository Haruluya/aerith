import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get('hello')
    getHello(){
        return "hello";
    }
}
