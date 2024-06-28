import { Inject, Injectable } from '@nestjs/common';
import { ModelClass } from 'objection';
import { UserModel } from './database/userModel';

@Injectable()
export class AppService {
  constructor(@Inject('UserModel') private user: ModelClass<UserModel>) {}
  async getUserList() {
    try{
    const data= (await this.user.query());
    return data;
    } catch(err){
      console.error(err.status)
    }
  }

  async saveUser(item) {
    try{
    const data= await (this.user.query().insert(item));
    return 'data';
    } catch(err){
      console.error(err.status);
    }
  }
}
