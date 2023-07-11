import { createdRegexp } from '../../config/regexp/regexp.js';

const validationUnaryExpressions = (expression: string): RegExpMatchArray =>
  expression.match(createdRegexp.isUnaryExressionValidation);

export default validationUnaryExpressions;
