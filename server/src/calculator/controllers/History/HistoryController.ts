import { Response, Request } from 'express';
import knexConfig from '../../../database/pg-knexFile.js';
import CalculatorHistory from '../../../database/mdb-mongooseFile.js';

class HistoryController {
  public async getAll(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    const allHistories = await knexConfig.select().from('calculator_history');
    // const allHistories = [];
    // await CalculatorHistory.find().then((historyItems) => {
    //   allHistories.push(historyItems);
    // });
    return response.json(allHistories);
  }

  public async create(expression: string, result: number): Promise<void> {
    await knexConfig('calculator_history').insert({ expression, result });
    // CalculatorHistory({
    //   calculation_date: new Date(),
    //   expression,
    //   result,
    // }).save();
  }

  public async delete(request: Request, response: Response) {
    const id = request.params.id;
    await knexConfig('calculator_history').where('_id', id).del();
    // await CalculatorHistory.deleteOne({ _id: id });
    response.status(204).send();
  }
}

export default new HistoryController();
