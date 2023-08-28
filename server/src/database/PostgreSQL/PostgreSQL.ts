import dotenv from 'dotenv';
import { IFilters, IHistoryItem, IListResponse } from '@utils/interfaces';
import { consts } from '@utils/consts';
import AbstractDatabase from '../AbstractDatabase';
import knexModel from './config/pg-knexFile';
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

  async list(
    sort?: string,
    filters: IFilters = {},
    startIndex?: number,
    endIndex?: number
  ): Promise<IListResponse> {
    let query = knexModel
      .select()
      .from(process.env.POSTGRESQL_HISTORY_TABLE as string);
    const countQuery = await knexModel
      .count()
      .from(process.env.POSTGRESQL_HISTORY_TABLE as string);
    const totalCount = Number(countQuery[0].count);
    if (filters.expression)
      query = query.where(consts.expressionAttribute, filters.expression);
    if (filters.result)
      query = query.where(consts.resultAttribute, filters.result);
    if (sort === consts.descending)
      query = query.orderBy(consts.createdDateAttribute, consts.descending);
    if (startIndex !== undefined && endIndex !== undefined)
      query = query.offset(startIndex).limit(endIndex);
    const data: IHistoryItem[] = await query;
    return { data, totalCount };
  }
}

export default PostgresDB;
