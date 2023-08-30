import { Request, Response } from 'express';
import calculate from '../../service/calculator/calculate/calculate';
import HistoryService from '@calculator/service/history/HistoryService';
import { failResponse, successResponse } from '@calculator/entities/response';

class CalculateController {
  public async calculateExression(
    request: Request,
    response: Response
  ): Promise<void> {
    try {
      const expression = request.body.expression;
      const result = calculate(expression).toString();
      await HistoryService.create(expression, Number(result));
      successResponse({ response, isError: true, result });
    } catch (error: any) {
      failResponse({ response, errorMessage: error.message, isError: false });
    }
  }
}

export default new CalculateController();
