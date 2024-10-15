import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import appConfig from './app.config';
import jwtConfig from '../jwt/jwt.config';

export const importConfigModule = () => {
  return ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
    envFilePath: [
      path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}.local`),
      path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`),
      path.resolve(__dirname, '../../.env'),
    ],
    load: [appConfig, jwtConfig],
  });
};
