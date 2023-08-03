import ConfigType from '../types/config.js';
import { Request, Response } from 'express'; // Import Request and Response from Express

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

interface IRouters {
  method: string;
  path: string;
  middlewares: any[];
  action: (request: Request, response: Response) => void;
}

export { IOperations, IBinaryOperation, IUnaryOperations, IConfig, IRouters };
