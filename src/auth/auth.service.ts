import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login() {
    return this.jwtService.signAsync({ id: 1, name: 'Bob' });
  }
}
