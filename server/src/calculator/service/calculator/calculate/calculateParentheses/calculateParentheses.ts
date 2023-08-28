import { unaryFunctions } from '@calculatorConfig/functions/functions';
import { constantRegexp, createdRegexp } from '@calculatorConfig/regexp/regexp';
import calculateBinaryOperations from '../calculateBinaryOperations/calculateBinaryOperations';

const calculateParentheses = (expression: string): string => {
  while (expression.match(constantRegexp.mostNestedParentheses)) {
    const matches = constantRegexp.mostNestedParentheses.exec(expression);
    const innerExpression = matches![1];
    if (matches![0].match(constantRegexp.negativeNumberInBrackets)) {
      expression = expression.replace(
        `(${innerExpression})`,
        `[${innerExpression}]`
      );
    }
    let innerResult = calculateBinaryOperations(innerExpression);
    if (innerResult < 0) innerResult = `[${innerResult}]`;
    expression = expression.replace(`(${innerExpression})`, innerResult);
    if (expression.match(createdRegexp.isUnaryRegexp)) {
      const innerUnaryExpression = expression.match(
        createdRegexp.isUnaryRegexp
      );
      const unaryValue = innerUnaryExpression?.groups?.value.match(
        constantRegexp.isDynamicNumber
      )![0];
      const unaryAction = innerUnaryExpression?.groups?.operator as string;
      const unaryFunction = unaryFunctions[unaryAction] as (
        number: number
      ) => number;
      const unaryResult = unaryFunction(Number(unaryValue));
      expression = expression.replace(
        `${innerUnaryExpression![0]}`,
        `(${unaryResult})`
      );
    }
  }

  if ((expression.match(constantRegexp.isParenthese) || []).length)
    throw new Error('Check the number of brackets');

  if (constantRegexp.isLetter.test(expression))
    throw new Error('Check the syntax of unary operations');

  return expression;
};

export default calculateParentheses;
