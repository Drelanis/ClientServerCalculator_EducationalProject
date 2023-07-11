import validationMainOperators from './checks/validationMainOperators.js';
import validationNumbers from './checks/validationNumbers.js';
import validationUnaryExpressions from './checks/validationUnaryExpressions.js';

const validationExpression = (expression: string): boolean => {
  if (validationUnaryExpressions(expression)) {
    throw new Error('Value of unary expressions must be enclosed in ()');
  }
  if (!validationNumbers(expression)) {
    throw new Error('Check out the syntax of numbers');
  }
  if (!validationMainOperators(expression)) {
    throw new Error('Check out the syntax of operators');
  }

  return true;
};

export default validationExpression;
