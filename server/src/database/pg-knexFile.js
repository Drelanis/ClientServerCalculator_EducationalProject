import knex from 'knex';

const knexConfig = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '5872424',
    database: 'calculator',
  },
});

export default knexConfig;
