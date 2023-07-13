import Stack from '../../../../../stack/Stack.js';
import { binaryFunctions } from '../../../../config/functions/functions.js';
import { constantRegexp } from '../../../../config/regexp/regexp.js';

const numberStack: any = new Stack();
const operatorStack: any = new Stack();

const minusCount = (negativeNumber: string): number => {
  const minuses = negativeNumber.match(/-/g);
  const minuseCount = minuses.length;
  return minuseCount;
};

const considerMinuses = (negativeNumber: string): string => {
  const number = negativeNumber.match(constantRegexp.isNumber)[0];
  if (minusCount(negativeNumber) % 2 === 0) {
    return `${number}`;
  }
  return `-${number}`;
};

const createField = (expression: string): string[] => {
  const matches = expression.match(constantRegexp.isSymbolCombination) || [];
  const field = matches.map((element: string) => {
    element = element.replace(/\[|\]/g, '');
    if (constantRegexp.isNegative.test(element)) {
      return considerMinuses(element);
    }
    return element;
  });
  return field;
};

const performOperation = (
  numberStack: string[],
  operatorStack: string[]
): number => {
  const operator: string = operatorStack.pop();
  const secondOperand: string = numberStack.pop();
  const firstOperand: string = numberStack.pop();
  const resultOfOperation: number = binaryFunctions[operator].operation(
    firstOperand,
    secondOperand
  );
  return resultOfOperation;
};

const calculateBinaryOperations = (expression: string) => {
  numberStack.setEmpty();
  operatorStack.setEmpty();
  const field = createField(expression);
  for (let index = 0; index < field.length; index += 1) {
    let char = field[index];
    if (constantRegexp.isNumber.test(char)) {
      numberStack.push(Number(char));
    }
    if (binaryFunctions[char]) {
      while (
        !operatorStack.isEmpty() &&
        binaryFunctions[char].precedence <=
          binaryFunctions[operatorStack.peek()].precedence
      ) {
        numberStack.push(performOperation(numberStack, operatorStack));
      }
      operatorStack.push(char);
    }
  }
  while (!operatorStack.isEmpty()) {
    numberStack.push(performOperation(numberStack, operatorStack));
  }
  return numberStack.pop();
};

export default calculateBinaryOperations;
