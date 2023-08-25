import validationNumbers from '../checks/validationNumbers';
import { Request, Response } from 'express';
import getCalculateResponse from '../../../../entities/calculateResponse';

const validateNumbers = (
  request: Request,
  response: Response,
  next: () => void
) => {
  if (!validationNumbers(request.body.expression)) {
    return response.json(
      getCalculateResponse(false, 'Check out the syntax of numbers', '0')
    );
  }
  next();
};

export default validateNumbers;
