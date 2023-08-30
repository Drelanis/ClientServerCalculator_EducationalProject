import { Request, Response } from 'express';
import checkIntegerNumber from '../checks/checkIntegerNumber';
import { failResponse } from '@calculator/entities/response';

const validatePage = (
  request: Request,
  response: Response,
  next: () => void
) => {
  const page = request.query.page;
  if (page && !checkIntegerNumber(page as string)) {
    return failResponse({
      response,
      errorMessage: 'Invalid page parameters, limit must be an integer',
    });
  }
  next();
};

export default validatePage;
