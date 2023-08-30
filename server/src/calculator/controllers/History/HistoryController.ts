import { Response, Request } from 'express';
import dotenv from 'dotenv';
import { consts } from '@utils/consts';
import HistoryService from '@calculator/service/history/HistoryService';
import { failResponse, successResponse } from '@calculator/entities/response';
dotenv.config();

class HistoryController {
  public async list(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const { page, limit, sort, expression, result } = request.query;
      const { data, totalCount } = await HistoryService.list(
        page as string,
        limit as string,
        sort as consts,
        expression as string,
        result as string
      );
      return successResponse({ response, data, totalCount });
    } catch (error: any) {
      return failResponse({ response, errorMessage: error.message });
    }
  }

  public async delete(request: Request, response: Response) {
    try {
      const id = request.params.id;
      await HistoryService.delete(id);
      return successResponse({ response, message: 'Deleted successfully' });
    } catch (error: any) {
      return failResponse({ response, errorMessage: error.message });
    }
  }
}

export default new HistoryController();
