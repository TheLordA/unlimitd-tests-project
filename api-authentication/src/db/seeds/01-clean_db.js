const tablesToClean = ['users'];

exports.seed = async (knex) => {
  for (const table of tablesToClean) {
    await knex(table).del();
  }
};
