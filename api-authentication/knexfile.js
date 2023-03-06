const config = require('config');

const commonConfig = {
  client: config.get('db.client'),
  migrations: {
    directory: './src/db/migrations',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: './src/db/seeds',
  },
};

const knexConfig = {
  connection: config.get('db.connection'),
  ...commonConfig,
};

module.exports = knexConfig;
