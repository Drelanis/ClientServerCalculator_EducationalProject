import { constantRegexp } from '@calculatorConfig/regexp/regexp';

const validationMainOperators = (expression: string): boolean => {
  if (constantRegexp.minuseValidate.test(expression)) return false;
  return !constantRegexp.validationMainOperators.test(expression);
};

export default validationMainOperators;
