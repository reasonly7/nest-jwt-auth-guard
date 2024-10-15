import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { importJwtModule } from 'src/jwt/importJwtModule';
import { JwtAuthProvider } from 'src/jwt/jwt-auth.guard';

@Module({
  imports: [importJwtModule()],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthProvider],
})
export class AuthModule {}
