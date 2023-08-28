import { Request, Response } from 'express';
import getHistoryResponse from '@calculator/entities/historyResponse';
import validateNumbers from '../../../calculator/errors/checks/validationNumbers';

const validateResult = (
  request: Request,
  response: Response,
  next: () => void
) => {
  const result = request.query.result;
  if (result && !validateNumbers(result as string)) {
    return response.json(
      getHistoryResponse(
        true,
        'Invalid result parameters, limit must be a number'
      )
    );
  }
  next();
};

export default validateResult;
