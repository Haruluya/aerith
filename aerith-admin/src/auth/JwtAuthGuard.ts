
import {
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
  import { JSONRes } from 'src/utils/jsonResInterface';
  const jsonRes = new JSONRes() 

  @Injectable()
  export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
      // 在这里添加自定义的认证逻辑
      // 例如调用 super.logIn(request) 来建立一个session
      return super.canActivate(context);
    }
  
    handleRequest(err, user, info) {
      // 可以抛出一个基于info或者err参数的异常
      try {
        if (err || !user) {
            // err='No auth token'
          throw err || new UnauthorizedException();
        }
      } catch (error) {
        return jsonRes._error(400,"未授权！");
      }
      return user;
    }
  }
  
  