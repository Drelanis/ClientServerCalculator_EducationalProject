import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();

const knexModel = knex({
  client: 'pg',
  connection: {
    host: process.env.POSTGRESQL_HOST,
    port: Number(process.env.POSTGRESQL_PORT),
    user: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_PASSWORD,
    database: process.env.POSTGRESQL_DATABASE,
  },
});

export default knexModel;
