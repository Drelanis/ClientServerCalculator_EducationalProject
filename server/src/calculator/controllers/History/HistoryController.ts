import { Response, Request } from 'express';
import Database from '../../../utils/DatabaseFactory.js';
import dotenv from 'dotenv';
import { IHistoryItem } from '../../../database/AbstractDatabase.js';
dotenv.config();

class HistoryController {
  public async getAll(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const {
        page = 1,
        limit = 10,
        sort = 'asc',
        expression,
        result,
      } = request.query;
      const filters: Partial<any> = {};
      if (expression) filters.expression = expression;
      if (result) filters.result = Number(result);
      const startIndex = (Number(page) - 1) * Number(limit);
      const endIndex = Number(page) * Number(limit);
      const allHistories = await Database.query().list(sort as string, filters);
      const paginatedHistories = allHistories.slice(startIndex, endIndex);
      return response.json({
        histories: paginatedHistories,
        totalCount: allHistories.length,
      });
    } catch (error) {
      return response.status(500).json();
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
      response.status(204).send();
    } catch (error) {
      response.status(500).json();
    }
  }
}

export default new HistoryController();
