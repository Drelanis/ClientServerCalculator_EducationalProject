import calculateBinaryOperations from './calculateBinaryOperations/calculateBinaryOperations';
import calculateParentheses from './calculateParentheses/calculateParentheses';
import findConstants from './findConstants/findConstants';

const calculate = (expression: string): number => {
  if (!expression) return 0;
  expression = findConstants(expression);
  expression = calculateParentheses(expression);
  return calculateBinaryOperations(expression);
};

export default calculate;
