import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @MessagePattern('user-details')
  async getUserList(@Payload() message: {}) {
    const data = await this.service.getUserList();
    return data;
  }

  @MessagePattern('save-user')
  async saveUserList(@Payload() item) {
    const data = await this.service.saveUser(item);
    return data;
  }
}
