import { Module } from '@nestjs/common';
import { importConfigModule } from './config/importConfigModule';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [importConfigModule(), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
