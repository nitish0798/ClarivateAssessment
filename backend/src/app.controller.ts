import { Body, Controller, Get, Post, RawBodyRequest, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('userList')
  async findAll(@Res() res: Response) {
    try {
      const data = await this.appService.getUserList();
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching user list:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  @Post('saveUser')
  async save(@Body() item: any, @Res() res: Response) {
    try {

      const data = await this.appService.saveUser(item);
      return res.status(200).json(data);
    } catch (error) {
      // Handle any errors here
      console.error('Error fetching user list:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

}
