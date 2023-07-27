import { createContext } from 'react';
import config from '../../types/config';
import {
  IConfigContext,
  IThemeContext,
} from '../../interfaces/calculatorInterfaces';

export const CalculatorConfigContext = createContext<IConfigContext>({
  config: {} as config,
  configLoading: false,
  configError: '',
});

export const CalculatorThemeContext = createContext<IThemeContext>({
  isDarkTheme: false,
  setDarkTheme: () => false,
});

interface IExtraOperation {
  isExtraOperation: boolean;
}

export const ExtraOperationContext = createContext<IExtraOperation>({
  isExtraOperation: false,
});
