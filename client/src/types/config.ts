import { IOperations } from '../interfaces/calculatorInterfaces.js';

type config = {
  [key: string]: IOperations | Partial<string[]>;
  allowedButtons: Partial<string[]>;
};

export default config;
