import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';
import { Request } from 'express';
import { Public } from 'src/jwt/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Get('login')
  login() {
    return this.authService.login();
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getUserInfo(@Req() req: Request) {
    return req.user;
  }
}
