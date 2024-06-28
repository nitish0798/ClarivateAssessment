import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.bigIncrements('id');
    table.string('first_name');
    table.string('last_name');
    table.string('email').notNullable().unique();
    table.string('password');
    table.jsonb('meta');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('users');
}