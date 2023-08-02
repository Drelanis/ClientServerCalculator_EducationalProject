import { createContext } from 'react';
import config from '../../types/config';
import { IConfigContext } from '../../interfaces/calculatorInterfaces';

export const CalculatorConfigContext = createContext<IConfigContext>({
  config: {} as config,
  configLoading: false,
  configError: '',
});

export const CalculateContext = createContext({
  calculate: () => {},
  allClean: () => {},
  enterButtonValue: () => {},
});
