import React, { FC, useState, useEffect } from 'react';
import { CalculatorConfigContext } from '../../../context';
import CalculatorApi from '../../../../api/calculatorApi/CalculatorApi';
import useFetching from '../../../hooks/useFetching';
import { IConfigContext } from '../../../../interfaces/calculatorInterfaces';

interface IConfigContextProviderProps {
  children: React.ReactNode;
}

const ConfigContextProvider: FC<IConfigContextProviderProps> = ({
  children,
}) => {
  const [config, setConfig] = useState({});
  const [fetchConfig, configLoading, configError] = useFetching(async () => {
    const response = await CalculatorApi.getOperationsConfig();
    setConfig({ ...config, ...response });
  }) as [() => Promise<void>, boolean, string];

  useEffect(() => {
    fetchConfig();
  }, []);

  return (
    <CalculatorConfigContext.Provider
      value={{ config, configLoading, configError } as IConfigContext}
    >
      {children}
    </CalculatorConfigContext.Provider>
  );
};

export default ConfigContextProvider;
