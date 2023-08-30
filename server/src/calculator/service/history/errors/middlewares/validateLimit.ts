import { Request, Response } from 'express';
import checkIntegerNumber from '../checks/checkIntegerNumber';
import { failResponse } from '@calculator/entities/response';

const validateLimit = (
  request: Request,
  response: Response,
  next: () => void
) => {
  const limit = request.query.limit;
  if (limit && !checkIntegerNumber(limit as string)) {
    return failResponse({
      response,
      errorMessage: 'Invalid limit parameters, limit must be an integer',
    });
  }
  next();
};

export default validateLimit;
