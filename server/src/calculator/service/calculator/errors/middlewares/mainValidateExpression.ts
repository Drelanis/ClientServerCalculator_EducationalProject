import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { constantRegexp } from '@calculatorConfig/regexp/regexp';
import getCalculateResponse from '../../../../entities/calculateResponse';

const mainValidateExpression = [
  body('expression')
    .exists()
    .withMessage('Expression parameter is required')
    .isString()
    .withMessage('Expression must be a string')
    .matches(constantRegexp.invalidCharacter)
    .withMessage('Invalid character in expression'),
];

const checkValidateExpression = (
  request: Request,
  response: Response,
  next: () => void
) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.json(
      getCalculateResponse(false, errors.array()[0].msg, '0')
    );
  }
  next();
};

export { mainValidateExpression, checkValidateExpression };
