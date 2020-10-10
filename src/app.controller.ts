import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppHealth } from './app.types'
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger'

@Controller()
@ApiTags('Health')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiOperation({ description: 'health check' })
  @ApiOkResponse({ type: AppHealth })
  @Get('/')
  getHealth(): AppHealth {
    return this.appService.getHealth();
  }
}
