import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtAuthGuard } from './JwtAuthGuard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.accessTokenExpiresIn }, 
    }),
  ],
  providers: [AuthService, JwtStrategy,JwtAuthGuard],
  exports: [AuthService,JwtAuthGuard],
})
export class AuthModule {}
