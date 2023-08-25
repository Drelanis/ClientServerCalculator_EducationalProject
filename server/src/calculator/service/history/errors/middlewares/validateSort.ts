import { Request, Response } from 'express';
import getHistoryResponse from '../../../../../calculator/entities/historyResponse';
import { consts } from '../../../../../utils/consts';

const validateSort = (
  request: Request,
  response: Response,
  next: () => void
) => {
  const sort = request.query.sort;
  if (sort && sort !== consts.ascending && sort !== consts.descending) {
    return response
      .status(400)
      .json(
        getHistoryResponse(
          true,
          `Wrong sort value, use ${consts.ascending} or ${consts.descending}`
        )
      );
  }
  next();
};

export default validateSort;
