import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

import { ServerEnv } from './env';

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService<ServerEnv, true>) {}
  get<T extends keyof ServerEnv>(key: T) {
    return this.configService.get(key, { infer: true });
  }
}
