import { FC, useEffect, useState } from 'react';
import CalculatorBody from './view/components/CalculatorBody';
import './view/styles/index.scss';
import {
  CalculatorConfigContext,
  CalculatorThemeContext,
} from './view/context';
import CalculatorApi from './api/calculatorApi/CalculatorApi';
import useFetching from './view/hooks/useFetching';
import { IConfigContext } from './interfaces/calculatorInterfaces';
import IModel from './model/IModel';

interface IAppProps {
  model: IModel;
}

const App: FC<IAppProps> = ({ model }) => {
  const [config, setConfig] = useState({});
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [fetchConfig, configLoading, configError] = useFetching(async () => {
    const response = await CalculatorApi.getOperationsConfig();
    setConfig({ ...config, ...response });
  }) as [() => Promise<void>, boolean, string];

  useEffect(() => {
    fetchConfig();
  }, []);

  return (
    <CalculatorThemeContext.Provider value={{ isDarkTheme, setDarkTheme }}>
      <CalculatorConfigContext.Provider
        value={{ config, configLoading, configError } as IConfigContext}
      >
        <CalculatorBody model={model} />
      </CalculatorConfigContext.Provider>
    </CalculatorThemeContext.Provider>
  );
};

export default App;
