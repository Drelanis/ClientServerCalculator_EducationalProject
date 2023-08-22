import AbstractDatabase, { IHistoryItem } from '../AbstractDatabase';
import knexModel from './config/pg-knexFile';
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

  public async delete(id: string): Promise<void> {
    await knexModel(process.env.POSTGRESQL_HISTORY_TABLE)
      .where('_id', id)
      .del();
  }

  async list(sort?: string, filters: any = {}): Promise<IHistoryItem[]> {
    let query = knexModel
      .select()
      .from(process.env.POSTGRESQL_HISTORY_TABLE as string);

    if (filters.expression)
      query = query.where('expression', filters.expression);
    if (filters.result) query = query.where('result', filters.result);
    if (sort === 'desc') query = query.orderBy('calculation_date', 'desc');

    return await query;
  }
}

export default PostgresDB;
