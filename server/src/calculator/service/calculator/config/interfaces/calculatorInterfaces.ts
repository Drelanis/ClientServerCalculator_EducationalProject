import config from '../types/config.js';

interface IOperations {
  [key: string]: IBinaryOperation | IUnaryOperations;
}

interface IMathOperation {
  content: string;
}

interface IBinaryOperation extends IMathOperation {
  precedence: number;
  operation: (firstOperand: number, secondOperand: number) => number;
}

interface IUnaryOperations extends IMathOperation {
  [key: string]: ((number: number) => number) | string;
}

interface IConfig {
  get(): Partial<config>;
}

export { IOperations, IBinaryOperation, IUnaryOperations, IConfig };
