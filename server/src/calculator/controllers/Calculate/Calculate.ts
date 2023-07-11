import { Request, Response } from 'express';
import calculate from '../../service/calculator/calculate/calculate.js';
import validationExpression from '../../service/calculator/errors/validationExpression.js';

class Calculate {
  public async calculateExression(
    request: Request,
    response: Response
  ): Promise<void> {
    try {
      const expression = request.body.expression;
      validationExpression(expression);
      response.json({ error: false, result: calculate(expression) });
    } catch (error) {
      response.json({ error: error.message, result: 0 });
    }
  }
}

export default new Calculate();
