import Pool from 'pg';

export const pool = new Pool.Pool({
  user: 'postgres',
  password: '5872424',
  host: 'localhost',
  port: 5432,
  database: 'calculator',
});
