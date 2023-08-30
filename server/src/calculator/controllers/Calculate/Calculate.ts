import { Request, Response } from 'express';
import calculate from '../../service/calculator/calculate/calculate';
import calculateResponse from '../../entities/calculateResponse';
import HistoryService from '@calculator/service/history/HistoryService';
import { successResponse } from '@calculator/entities/response';

class CalculateController {
  public async calculateExression(
    request: Request,
    response: Response
  ): Promise<void> {
    try {
      const expression = request.body.expression;
      const result = calculate(expression).toString();
      await HistoryService.create(expression, Number(result));
      response.json(calculateResponse(true, '', result));
    } catch (error: any) {
      response.json(calculateResponse(false, error.message, '0'));
    }
  }
}

export default new CalculateController();
