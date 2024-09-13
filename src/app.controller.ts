import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const x = null;
    const y = x.id;
    console.log(y);
    return this.appService.getHello();
  }
}
