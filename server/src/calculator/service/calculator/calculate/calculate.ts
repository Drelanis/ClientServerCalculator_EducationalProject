import calculateBinaryOperations from './calculateBinaryOperations/calculateBinaryOperations.js';
import calculateParentheses from './calculateParentheses/calculateParentheses.js';
import findConstants from './findConstants/findConstants.js';

const calculate = (expression: string): number => {
  if (!expression) return 0;
  expression = findConstants(expression);
  expression = calculateParentheses(expression);
  return calculateBinaryOperations(expression);
};

export default calculate;
