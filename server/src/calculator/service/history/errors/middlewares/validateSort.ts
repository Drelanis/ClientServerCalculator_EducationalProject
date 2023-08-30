import { Request, Response } from 'express';
import { failResponse } from '@calculator/entities/response';
import { consts } from '@utils/consts';

const validateSort = (
  request: Request,
  response: Response,
  next: () => void
) => {
  const sort = request.query.sort;
  if (sort && sort !== consts.ascending && sort !== consts.descending) {
    return failResponse({
      response,
      errorMessage: `Wrong sort value, use ${consts.ascending} or ${consts.descending}`,
    });
  }
  next();
};

export default validateSort;
