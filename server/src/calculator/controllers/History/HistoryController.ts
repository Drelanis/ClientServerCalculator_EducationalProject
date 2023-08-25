import { Response, Request } from 'express';
import Database from '../../../utils/DatabaseFactory';
import { IHistoryItem, IListResponse } from '../../../utils/interfaces';
import dotenv from 'dotenv';
import { consts } from '../../../utils/consts';
import HistoryService from '../../../calculator/service/history/HistoryService';
import getHistoryResponse from '../../../calculator/entities/historyResponse';
dotenv.config();

class HistoryController {
  public async list(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const {
        page,
        limit,
        sort = consts.ascending,
        expression,
        result,
      } = request.query;
      const { data, totalCount } = await HistoryService.list(
        page as string,
        limit as string,
        sort as consts,
        expression as string,
        result as string
      );
      return response.json(getHistoryResponse(false, '', data, totalCount));
    } catch (error: any) {
      return response.json(getHistoryResponse(true, error.message));
    }
  }

  public async create(
    expression: string,
    result: number
  ): Promise<IHistoryItem> {
    try {
      const historyItem = await Database.create(expression, result);
      return historyItem;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async delete(request: Request, response: Response) {
    const id = request.params.id;
    try {
      await HistoryService.delete(id);
      return response.status(200).json(getHistoryResponse(false, ''));
    } catch (error: any) {
      return response.json(getHistoryResponse(true, error.message));
    }
  }
}

export default new HistoryController();
