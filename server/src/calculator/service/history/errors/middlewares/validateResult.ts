import { Request, Response } from 'express';
import { failResponse } from '@calculator/entities/response';
import validateNumbers from '../../../calculator/errors/checks/validationNumbers';

const validateResult = (
  request: Request,
  response: Response,
  next: () => void
) => {
  const result = request.query.result;
  if (result && !validateNumbers(result as string)) {
    return failResponse({
      response,
      errorMessage: 'Invalid result parameters, limit must be a number',
    });
  }
  next();
};

export default validateResult;
