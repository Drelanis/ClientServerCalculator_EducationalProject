import History from '../../history/History.js';
import { Response, Request } from 'express';

class HistoryController {
  public async get(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    return response.json(History.get());
  }
}

export default new HistoryController();
