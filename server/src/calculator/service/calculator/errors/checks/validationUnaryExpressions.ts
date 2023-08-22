import { createdRegexp } from '../../../../config/regexp/regexp';

const validationUnaryExpressions = (expression: string): RegExpMatchArray =>
  expression.match(
    createdRegexp.isUnaryExressionValidation
  ) as RegExpMatchArray;

export default validationUnaryExpressions;
