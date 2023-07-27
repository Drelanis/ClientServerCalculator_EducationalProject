import ConfigType from '../types/config.js';

interface IOperations {
  [key: string]: IBinaryOperation | IUnaryOperations;
}

interface IMathOperation {
  content: string;
  customAtcion?: boolean;
}

interface IBinaryOperation extends IMathOperation {
  precedence: number;
  operation: (firstOperand: number, secondOperand: number) => number;
}

interface IUnaryOperations extends IMathOperation {
  [key: string]: ((number: number) => number) | string | boolean;
}

interface IConfig {
  get(): Partial<ConfigType>;
}

export { IOperations, IBinaryOperation, IUnaryOperations, IConfig };
