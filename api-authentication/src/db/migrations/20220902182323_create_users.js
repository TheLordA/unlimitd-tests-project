exports.up = async function (knex) {
  await knex.schema.createTable('users', (table) => {
    // cspell-checker: disable-next-line
    table.string('id').primary().defaultTo(knex.raw("concat('usr_', md5(cast(random() as varchar(255))))"));
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table
      .enu('role', ['ADMIN', 'USER'], {
        enumName: 'users_roles_enum',
        useNative: true,
      })
      .notNullable()
      .defaultTo('USER');
    table.dateTime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.dateTime('updated_at').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable('users');
  await knex.schema.raw(`
    DROP TYPE "users_roles_enum";
  `);
};
