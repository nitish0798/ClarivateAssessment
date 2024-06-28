import { BaseModel } from './baseModel';

export class UserModel extends BaseModel {
  static tableName = 'users';

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  meta: any;  
  createdAt: Date;
  updatedAt: Date;
}
