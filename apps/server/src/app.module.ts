import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ServerEnv, serverEnvSchema } from './config/env';
import { TrpcModule } from './trpc/trpc.module';

@Module({
  imports: [
    NestConfigModule.forRoot({
      validate: (env: ServerEnv) => serverEnvSchema.parse(env),
      envFilePath: `./.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    ConfigModule,
    TrpcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
