import { Request, Response } from 'express';
import checkIntegerNumber from '../checks/checkIntegerNumber';
import getHistoryResponse from '../../../../../calculator/entities/historyResponse';

const validateLimit = (
  request: Request,
  response: Response,
  next: () => void
) => {
  const limit = request.query.limit;
  if (limit && !checkIntegerNumber(limit as string)) {
    return response.json(
      getHistoryResponse(
        true,
        'Invalid limit parameters, limit must be an integer'
      )
    );
  }
  next();
};

export default validateLimit;
