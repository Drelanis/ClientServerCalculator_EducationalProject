import ConfigType from 'types/config.js';

export interface IOperations {
  [key: string]: IBinaryOperation | IUnaryOperations;
}

export interface IMathOperation {
  content: string;
  customAction?: boolean;
}

export interface IBinaryOperation extends IMathOperation {
  precedence: number;
  operation: (firstOperand: number, secondOperand: number) => number;
}

export interface IUnaryOperations extends IMathOperation {
  [key: string]: ((number: number) => number) | string | boolean | undefined;
}

export interface IConfig {
  get(): Partial<ConfigType>;
}

export interface IConfigContext {
  config: ConfigType;
  configLoading: boolean;
  configError: string;
}

export interface IListItem {
  _id: string;
}

export interface IHistoryItem extends IListItem {
  expression: string;
  result: string;
  calculation_date: Date;
}

export interface IErrorResponse {
  isError: boolean;
  errorMessage: string;
}

export interface IHistoryResponse {
  isError: boolean;
  errorMessage: string;
  data: IHistoryItem[];
  totalCount: number;
}

export interface IListAPI {
  list: (page?: number, limit?: number) => Promise<any>;
  remove: (_id: string) => Promise<unknown>;
}
