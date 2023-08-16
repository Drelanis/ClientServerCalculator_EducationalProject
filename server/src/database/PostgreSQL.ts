import AbstractDatabase, { IHistoryItem } from './AbstractDatabase.js';
import knexModel from './queryBuilderConfigs/pg-knexFile.js';

class PostgresDB extends AbstractDatabase {
  public async create(
    expression: string,
    result: number
  ): Promise<IHistoryItem> {
    const historyItem: IHistoryItem = await knexModel(
      'calculator_history'
    ).insert({
      expression,
      result,
    });
    return historyItem;
  }

  public async delete(id: string | number): Promise<void> {
    await knexModel('calculator_history').where('_id', id).del();
  }

  public async list(): Promise<[]> {
    const allHistories = await knexModel.select().from('calculator_history');
    return allHistories;
  }
}

export default PostgresDB;
