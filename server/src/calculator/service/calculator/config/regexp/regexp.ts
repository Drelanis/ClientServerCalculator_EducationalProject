import { extraConstance } from '../extraOperations/extraOperations.js';
import { unaryFunctions } from '../functions/functions.js';
import {
  IOperations,
  IUnaryOperations,
} from '../interfaces/calculatorInterfaces.js';

const constantRegexp = {
  isOperator: /[+\-*\/\^%=(),]/,
  isNumber: /\d+(\.\d+)?/,
  isDynamicNumber: /[-+]?\d+(\.\d+)?/g,
  isNegative: /^-+\d+(\.\d+)?$/,
  isSymbolCombination: /(\d+\.?\d*)|([+\-*\/\^%])|(\[.+?\])/g,
  negativeNumberInBrackets: /\((-?\d+(\.\d+)?)\)/,
  mostNestedParentheses: /\(([^()]+)\)/g,
  validationMainOperators: /([/*\-+%^]){2}/,
  isParenthese: /\(|\)/g,
  isLetter: /[a-zA-Z]/,
};

const isConstanse = (constants: IOperations) => {
  if (!constants) return;
  let regexpString = '';
  Object.values(constants).forEach((element, index) => {
    regexpString += element.content;
    if (Object.keys(constants).length - 1 === index) {
      return;
    }
    regexpString += '|';
  });
  return new RegExp(`(${regexpString})`, 'g');
};

const unaryOperationsCreaterForRegexp = (
  functions: Partial<IUnaryOperations>
) => {
  if (!functions) return;
  let regexpString = '';
  Object.keys(functions).forEach((element, index) => {
    regexpString += element;
    if (Object.keys(functions).length - 1 === index) {
      return;
    }
    regexpString += '|';
  });
  return regexpString;
};

const isIdentifierCreater = (functions: Partial<IUnaryOperations>) =>
  new RegExp(
    `(?<operator>${unaryOperationsCreaterForRegexp(
      functions
    )})(?<value>\\d+(\\.\\d+)?|\\[-?\\d+(\\.\\d+)?\\])`
  );

const isUnaryExressionValidation = (functions: Partial<IUnaryOperations>) =>
  new RegExp(
    `(${unaryOperationsCreaterForRegexp(functions)})\\d+(\\.\\d+)?`,
    'g'
  );

const createdRegexp = {
  isConstanse: isConstanse(extraConstance),
  isUnaryRegexp: isIdentifierCreater(unaryFunctions),
  isUnaryExressionValidation: isUnaryExressionValidation(unaryFunctions),
};

export { constantRegexp, createdRegexp };
