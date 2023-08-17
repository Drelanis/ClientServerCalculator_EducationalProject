import MongoDB from '../database/MongoDB/MongoDB.js';
import PostgresDB from '../database/PostgreSQL/PostgreSQL.js';
import PostgresDatabase from '../database/PostgreSQL/PostgreSQL.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

enum DatabaseType {
  POSTGRES = 'postgreSQL',
  MONGODB = 'mongodb',
}

class Database {
  private instance: PostgresDB | MongoDB;

  constructor() {
    this.instance = this.create(process.env.DATABASE_TYPE as DatabaseType);
  }

  private create(type: DatabaseType): PostgresDB | MongoDB {
    switch (type) {
      case DatabaseType.POSTGRES:
        return new PostgresDatabase();
      case DatabaseType.MONGODB:
        const mongoDBUrl = process.env.MONGODB_URL;
        mongoose.connect(mongoDBUrl);
        return new MongoDB();
      default:
        throw new Error(`Unsupported database type: ${type}`);
    }
  }

  public query() {
    return this.instance;
  }
}

export default new Database();
