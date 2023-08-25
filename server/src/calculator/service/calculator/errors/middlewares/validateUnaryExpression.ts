import { Request, Response } from 'express';
import getCalculateResponse from '../../../../entities/calculateResponse';
import validationUnaryExpressions from '../checks/validationUnaryExpressions';

const validateUnaryExpression = (
  request: Request,
  response: Response,
  next: () => void
) => {
  if (validationUnaryExpressions(request.body.expression)) {
    return response.json(
      getCalculateResponse(
        false,
        'Value of unary expressions must be enclosed in ()',
        '0'
      )
    );
  }
  next();
};

export default validateUnaryExpression;
