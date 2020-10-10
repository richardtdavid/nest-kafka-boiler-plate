import { Injectable } from '@nestjs/common';
import { AppHealth } from './app.types'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) { }

  getHealth(): AppHealth {
    const health: AppHealth = {
      project: 'api-boiler-plate',
      time: Date.now(),
      build: this.configService.get("APP_BUILD", null),
      commit: this.configService.get("APP_COMMIT", null),
      created: this.configService.get("APP_CREATED", null)
    }
    return health
  }
}
