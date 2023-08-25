import { Request, Response } from 'express';
import checkIntegerNumber from '../checks/checkIntegerNumber';
import getHistoryResponse from '../../../../../calculator/entities/historyResponse';

const validatePage = (
  request: Request,
  response: Response,
  next: () => void
) => {
  const page = request.query.page;
  if (page && !checkIntegerNumber(page as string)) {
    return response.json(
      getHistoryResponse(
        true,
        'Invalid page parameters, limit must be an integer'
      )
    );
  }
  next();
};

export default validatePage;
