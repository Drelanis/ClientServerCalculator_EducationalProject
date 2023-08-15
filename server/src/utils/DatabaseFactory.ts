import MongoDB from '../database/MongoDB.js';
import PostgresDatabase from '../database/PostgreSQL.js';
import dotenv from 'dotenv';
dotenv.config();

enum DatabaseType {
  POSTGRES = 'postgreSQL',
  MONGODB = 'mongodb',
}

class Database {
  public create(type: DatabaseType) {
    switch (type) {
      case DatabaseType.POSTGRES:
        return new PostgresDatabase();
      case DatabaseType.MONGODB:
        return new MongoDB();
      default:
        throw new Error(`Unsupported database type: ${type}`);
    }
  }
}

export default new Database().create(process.env.DATABASE_TYPE as DatabaseType);
