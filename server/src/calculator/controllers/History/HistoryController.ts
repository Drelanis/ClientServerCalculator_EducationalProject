import { Response, Request } from 'express';
import knexConfig from '../../../config/knexFile.js';

class HistoryController {
  public async getAll(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    const allHistories = await knexConfig.select().from('calculator_history');
    return response.json(allHistories);
  }

  public async create(expression: string, result: number): Promise<void> {
    await knexConfig('calculator_history').insert({ expression, result });
  }

  public async delete(request: Request, response: Response) {
    const id = request.params.id;
    await knexConfig('calculator_history').where('id', id).del();
    response.status(204).send();
  }
}

export default new HistoryController();
