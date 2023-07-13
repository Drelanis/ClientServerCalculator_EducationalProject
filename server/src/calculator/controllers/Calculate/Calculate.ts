import { Request, Response } from 'express';
import calculate from '../../service/calculator/calculate/calculate.js';
import calculateResponse from '../../entities/calculateResponse/calculateResponse.js';

class Calculate {
  public async calculateExression(
    request: Request,
    response: Response
  ): Promise<void> {
    try {
      response.json(
        calculateResponse(true, '', `${calculate(request.body.expression)}`)
      );
    } catch (error) {
      response.json(calculateResponse(false, 'Oops, something is wrong', '0'));
    }
  }
}

export default new Calculate();
