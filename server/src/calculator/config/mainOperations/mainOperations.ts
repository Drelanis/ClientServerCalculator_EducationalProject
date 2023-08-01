import { IOperations } from '../interfaces/calculatorInterfaces.js';

const allClean = {
  allClean: {
    content: 'AC',
  },
};

const equal = {
  equal: {
    content: '=',
  },
};

const topMainOperations: IOperations = {
  openBracket: {
    content: '(',
  },
  closeBracket: {
    content: ')',
  },
};

const rightMainOperations: IOperations = {
  division: {
    content: '/',
    precedence: 2,
    operation: (firstOperand, secondOperand) => {
      return firstOperand / secondOperand;
    },
  },
  multiplication: {
    content: '*',
    precedence: 2,
    operation: (firstOperand, secondOperand) => {
      return firstOperand * secondOperand;
    },
  },
  subtraction: {
    content: '-',
    precedence: 1,
    operation: (firstOperand, secondOperand) => {
      if (!secondOperand && secondOperand !== 0) return -firstOperand;
      if (!firstOperand && firstOperand !== 0) return -secondOperand;
      return firstOperand - secondOperand;
    },
  },
  addition: {
    content: '+',
    precedence: 1,
    operation: (firstOperand, secondOperand) => {
      return firstOperand + secondOperand;
    },
  },
};

const operations: IOperations = {
  ...topMainOperations,
  ...rightMainOperations,
};

export { operations, topMainOperations, rightMainOperations, equal, allClean };
