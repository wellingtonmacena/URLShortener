import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller('api/url-shortener')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async CreateNewURL(
    @Body('originalUrl') originalUrl: string,
  ): Promise<string> {
    return await this.appService.createNewURL(originalUrl);
  }

  @Get(':id')
  async GetUrl(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<any> {
    var object = await this.appService.getUrl(id);
    if (object) {
      return res.redirect(object.originalUrl);
    }else{
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'URL not found',
      });
    }
  }
}
