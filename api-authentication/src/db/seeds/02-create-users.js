const bcrypt = require('bcrypt');

exports.seed = async (knex) => {
  await knex('users').insert([
    {
      email: 'admin@demo.com',
      firstname: 'Sherlyn',
      lastname: 'Reilly',
      password: await bcrypt.hash('password', 12),
      role: 'ADMIN',
    },
    {
      email: 'user@demo.com',
      firstname: 'Alina',
      lastname: 'Zamora',
      password: await bcrypt.hash('password', 12),
      role: 'USER',
    },
  ]);
};
