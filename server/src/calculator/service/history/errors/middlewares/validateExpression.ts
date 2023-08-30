import { Request, Response } from 'express';
import { failResponse } from '@calculator/entities/response';
import validationMainOperators from '../../../calculator/errors/checks/validationMainOperators';
import validationNumbers from '../../../calculator/errors/checks/validationNumbers';
import validationUnaryExpressions from '../../../calculator/errors/checks/validationUnaryExpressions';

const validateExpression = (
  request: Request,
  response: Response,
  next: () => void
) => {
  const expression = request.query.expression;
  if (expression && !validationMainOperators(expression as string)) {
    return failResponse({
      response,
      errorMessage: 'Check out the syntax of operators in expression',
    });
  }
  if (expression && !validationNumbers(expression as string)) {
    return failResponse({
      response,
      errorMessage: 'Check out the syntax of numbers in expression',
    });
  }
  if (expression && !validationUnaryExpressions(expression as string)) {
    return failResponse({
      response,
      errorMessage: 'Check out the syntax of unary expressions in expression',
    });
  }
  next();
};

export default validateExpression;
