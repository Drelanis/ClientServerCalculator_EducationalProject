import { IOperations } from 'interfaces/calculatorInterfaces.js';

type ConfigType = {
  [key: string]: IOperations | Partial<string[]> | boolean;
  isExtraOperations: boolean;
  allowedButtons: Partial<string[]>;
};

export default ConfigType;
