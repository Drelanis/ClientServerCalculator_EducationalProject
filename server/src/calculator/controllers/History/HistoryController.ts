import { Response, Request } from 'express';
import Database from '../../../utils/DatabaseFactory';
import { IHistoryItem, IListResponse } from '../../../utils/interfaces';
import buildFilters from '../../../utils/buildFilters';
import calculateIndexes from '../../../utils/calculateIndexes';
import dotenv from 'dotenv';
dotenv.config();

class HistoryController {
  public async list(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const { page, limit, sort = 'asc', expression, result } = request.query;
      const filters = buildFilters(expression as string, result as string);
      const { startIndex, endIndex } = calculateIndexes(
        page as string,
        limit as string
      );
      const { data, totalCount } = (await Database.query().list(
        sort as string,
        filters,
        startIndex,
        endIndex
      )) as IListResponse;
      return response.json({
        error: false,
        message: '',
        data,
        totalCount,
      });
    } catch (error) {
      return response.status(500).json({
        error: true,
        message: 'Database error',
        histories: [],
        totalCount: 0,
      });
    }
  }

  public async create(
    expression: string,
    result: number
  ): Promise<IHistoryItem> {
    try {
      const historyItem = await Database.query().create(expression, result);
      return historyItem;
    } catch (error) {
      throw new Error('Failed to create history item');
    }
  }

  public async delete(request: Request, response: Response) {
    const id = request.params.id;
    try {
      await Database.query().delete(id);
      return response.json({ error: false, message: '' });
    } catch (error) {
      return response
        .status(500)
        .json({ error: true, message: 'Database error' });
    }
  }
}

export default new HistoryController();
