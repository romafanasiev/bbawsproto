import { Module } from '@nestjs/common';

import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
  exports: [ConfigModule],
})
export class ConfigModule {}
