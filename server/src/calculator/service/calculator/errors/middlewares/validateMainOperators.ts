import { Request, Response } from 'express';
import getCalculateResponse from '../../../../entities/calculateResponse/calculateResponse.js';
import validationMainOperators from '../checks/validationMainOperators.js';

const validateMainOperators = (
  request: Request,
  response: Response,
  next: () => void
) => {
  if (!validationMainOperators(request.body.expression)) {
    return response.json(
      getCalculateResponse(false, 'Check out the syntax of operators', '0')
    );
  }
  next();
};

export default validateMainOperators;