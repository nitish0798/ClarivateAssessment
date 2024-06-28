import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('settings', (table) => {
    table.bigIncrements('id');
    table.boolean('is_notification_enabled');
    table.boolean('iis_new_dashboard_enabled');
    table.string('timezone');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('settings');
}
