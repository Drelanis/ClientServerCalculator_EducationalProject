import ConfigType from '../types/config';
import { Request, Response } from 'express';

export interface IOperations {
  [key: string]: IBinaryOperation | IUnaryOperations;
}

export interface IMathOperation {
  content: string;
  customAtcion?: boolean;
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

export interface IRouters {
  method: string;
  path: string;
  middlewares: any[];
  action: (request: Request, response: Response) => void;
}

export interface ISuccessResponseParams<T> {
  response: Response;
  message?: string;
  data?: T;
  totalCount?: number;
  status?: number;
}

export interface IFailResponseParams {
  response: Response;
  errorMessage: string;
  status?: number;
}
