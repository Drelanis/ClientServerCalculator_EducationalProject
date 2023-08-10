import { Response, Request } from 'express';
import { pool } from '../../../sql/execute-sql.js';

class HistoryController {
  public async getAll(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    const allHistories = await pool.query('SELECT * FROM calculator_history');
    return response.json(allHistories.rows);
  }

  public async create(expression: string, result: number): Promise<void> {
    await pool.query(
      'INSERT INTO calculator_history (expression, result) VALUES ($1, $2)',
      [expression, result]
    );
  }

  public async delete(request: Request, response: Response) {
    const id = request.params.id;
    await pool.query('DELETE FROM calculator_history WHERE id = $1', [id]);
    response.status(204).send();
  }
}

export default new HistoryController();
