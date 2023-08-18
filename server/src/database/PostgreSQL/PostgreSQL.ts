import AbstractDatabase, { IHistoryItem } from '../AbstractDatabase.js';
import knexModel from './config/pg-knexFile.js';
import dotenv from 'dotenv';
dotenv.config();

class PostgresDB extends AbstractDatabase<IHistoryItem> {
  public async create(
    expression: string,
    result: number
  ): Promise<IHistoryItem> {
    const historyItem: IHistoryItem = await knexModel(
      process.env.POSTGRESQL_HISTORY_TABLE
    ).insert({
      expression,
      result,
    });
    return historyItem;
  }

  public async delete(id: string | number): Promise<void> {
    await knexModel(process.env.POSTGRESQL_HISTORY_TABLE)
      .where('_id', id)
      .del();
  }

  public async list(): Promise<IHistoryItem[]> {
    const allHistories = await knexModel
      .select()
      .from(process.env.POSTGRESQL_HISTORY_TABLE);
    return allHistories;
  }
}

export default PostgresDB;
