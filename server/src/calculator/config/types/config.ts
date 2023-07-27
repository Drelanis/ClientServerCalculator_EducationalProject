import { IOperations } from '../interfaces/calculatorInterfaces.js';

type ConfigType = {
  [key: string]: IOperations | Partial<string[]> | boolean;
  isExtraOperatios: boolean;
  allowedButtons: Partial<string[]>;
};

export default ConfigType;
