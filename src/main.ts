import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.setGlobalPrefix(configService.get<string>('app.globalPrefix'));

  if (configService.get<string>('app.enableCors')) {
    app.enableCors();
  }
  await app.listen(configService.get<number>('app.port'));
}
bootstrap();
