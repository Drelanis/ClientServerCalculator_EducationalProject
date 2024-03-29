import { unaryFunctions } from '@calculatorConfig/functions/functions';
import { createdRegexp } from '@calculatorConfig/regexp/regexp';

const findConstants = (expression: string): string => {
  while (createdRegexp.isConstanse?.test(expression)) {
    const innerSymbol = expression.match(createdRegexp.isConstanse)![0];
    const inerFunction = unaryFunctions[innerSymbol] as () => number;
    const innerResult = inerFunction();
    expression = expression.replace(`${innerSymbol}`, `${innerResult}`);
  }
  return expression;
};

export default findConstants;
