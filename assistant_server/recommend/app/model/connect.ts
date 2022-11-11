const pgp = require('pg-promise');

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const connection = {
  host: 'db',
  port: 5432,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
  max: 30,
};
const db = pgp({})(connection);

export default db;
