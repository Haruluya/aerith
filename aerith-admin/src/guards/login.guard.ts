import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { validate } from 'class-validator';
import { Observable } from 'rxjs';


// 验证权限。
@Injectable()
export class LOginAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  };

  validateRequest(request:any): boolean | Promise<boolean> | Observable<boolean>{
    return true;
  }
}


// 在相应的controller中启动守卫：
// @UseGuards(RolesGuard)，也可以全局绑定。
// app.useGlobalGuards(new RolesGuard());