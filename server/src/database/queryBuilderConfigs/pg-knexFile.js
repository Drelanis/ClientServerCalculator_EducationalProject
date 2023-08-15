import knex from 'knex';

const knexModel = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '5872424',
    database: 'calculator',
  },
});

export default knexModel;
