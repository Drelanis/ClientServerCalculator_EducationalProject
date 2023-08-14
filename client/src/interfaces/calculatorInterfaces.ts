import ConfigType from '../types/config.js';

interface IOperations {
  [key: string]: IBinaryOperation | IUnaryOperations;
}

interface IMathOperation {
  content: string;
  customAction?: boolean;
}

interface IBinaryOperation extends IMathOperation {
  precedence: number;
  operation: (firstOperand: number, secondOperand: number) => number;
}

interface IUnaryOperations extends IMathOperation {
  [key: string]: ((number: number) => number) | string | boolean | undefined;
}

interface IConfig {
  get(): Partial<ConfigType>;
}

interface IConfigContext {
  config: ConfigType;
  configLoading: boolean;
  configError: string;
}

interface IHistoryItem {
  _id: number | string;
  expression: string;
  result: string;
}

export type {
  IOperations,
  IBinaryOperation,
  IUnaryOperations,
  IConfig,
  IConfigContext,
  IHistoryItem,
};
