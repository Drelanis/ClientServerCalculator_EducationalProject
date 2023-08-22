import { constantRegexp } from '../../../../config/regexp/regexp';

const validationMainOperators = (expression: string): boolean => {
  if (constantRegexp.minuseValidate.test(expression)) return false;
  return !constantRegexp.validationMainOperators.test(expression);
};

export default validationMainOperators;
