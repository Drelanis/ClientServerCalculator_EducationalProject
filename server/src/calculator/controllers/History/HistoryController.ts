import { Response, Request } from 'express';
import Database from '../../../utils/DatabaseFactory.js';
import dotenv from 'dotenv';
dotenv.config();

class HistoryController {
  public async getAll(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    const allHistories = [];
    await Database.list().then((histories) => allHistories.push(histories));
    return response.json(allHistories);
  }

  public async create(expression: string, result: number): Promise<void> {
    await Database.create(expression, result);
  }

  public async delete(request: Request, response: Response) {
    const id = request.params.id;
    await Database.delete(id);
    response.status(204).send();
  }
}

export default new HistoryController();
