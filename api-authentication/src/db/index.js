import config from 'config';
import knex from 'knex';
import { Model, knexSnakeCaseMappers } from 'objection';

const getInstance = async () =>
  knex({
    client: config.get('db.client'),
    connection: config.get('db.connection'),
    ...knexSnakeCaseMappers({
      underscoreBeforeDigits: true,
      underscoreBetweenUppercaseLetters: true,
    }),
  });

getInstance().then((instance) => Model.knex(instance));

export default Model;
