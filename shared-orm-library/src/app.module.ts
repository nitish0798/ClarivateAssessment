import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';
import { UserModel } from './database/userModel';


const models = [UserModel];

const modelProviders = models.map((model) => {
  return {
    provide: model.name,
    useValue: model,
  };
});

const providers = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const knex = Knex({
        client: 'pg',
        connection: {
          host: 'localhost',
          user: 'techarc',
          password: 'Techarc123@deepmindz',
          database: 'temprary',
          port: 5432,
          ssl: false
        },
        debug: process.env.KNEX_DEBUG === 'true',
        ...knexSnakeCaseMappers(),
      });

      Model.knex(knex);
      return knex;
    },
  },
];


@Global()
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ...providers],
  // exports: [...providers]
})
export class AppModule {}
