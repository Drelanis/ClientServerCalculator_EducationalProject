import { constantRegexp } from '../../../../config/regexp/regexp.js';

const validationMainOperators = (expression: string): boolean =>
  !constantRegexp.validationMainOperators.test(expression);

export default validationMainOperators;
