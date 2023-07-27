import { FC, useContext, useRef } from 'react';
import { controlButtonsClassNames } from '../classNames/classNamesOfElements';
import darkThemeClassNames from '../classNames/darkThemeClassNames';
import CalculatorButtons from './CalculatorButtons';
import mainClassNames from '../classNames/mainClassNames';
import { IOperations } from '../../interfaces/calculatorInterfaces';
import { CalculatorConfigContext, CalculatorThemeContext } from '../context';

interface CalculatorMainOperationProps {
  expressionInput: (keyboardValue?: string, buttonValue?: string) => void;
  allCleanAction: () => void;
  calculate: () => void;
}

const CalculatorMainOperation: FC<CalculatorMainOperationProps> = ({
  expressionInput,
  allCleanAction,
  calculate,
}) => {
  const { config } = useContext(CalculatorConfigContext);
  const { isDarkTheme } = useContext(CalculatorThemeContext);

  return (
    <>
      <CalculatorButtons
        containerClassNames={[
          controlButtonsClassNames.topMainButtons,
          controlButtonsClassNames.operationsBackground,
          isDarkTheme ? `${darkThemeClassNames.operationsBackgroundDark}` : '',
        ]}
        mainClassNames={[
          mainClassNames.operation,
          mainClassNames.mainButtons,
          isDarkTheme
            ? `${darkThemeClassNames.mainButtonDark} ${darkThemeClassNames.operationButtonsDark}`
            : '',
        ]}
        buttons={config.topMainOperations as IOperations}
        action={expressionInput}
        allCleanAction={allCleanAction}
      />
      <CalculatorButtons
        containerClassNames={[controlButtonsClassNames.mainButtons]}
        mainClassNames={[
          mainClassNames.number,
          mainClassNames.mainButtons,
          isDarkTheme
            ? ` ${darkThemeClassNames.mainButtonDark} ${darkThemeClassNames.numbersDark}`
            : '',
        ]}
        buttons={config.numbers as IOperations}
        action={expressionInput}
      />
      <CalculatorButtons
        containerClassNames={[
          controlButtonsClassNames.rightMainButtons,
          controlButtonsClassNames.operationsBackground,
          isDarkTheme ? `${darkThemeClassNames.operationsBackgroundDark}` : '',
        ]}
        mainClassNames={[
          mainClassNames.operation,
          mainClassNames.mainButtons,
          isDarkTheme
            ? `${darkThemeClassNames.mainButtonDark} ${darkThemeClassNames.operationButtonsDark}`
            : '',
        ]}
        buttons={config.rightMainOperations as IOperations}
        action={expressionInput}
        calculate={calculate}
      />
    </>
  );
};

export default CalculatorMainOperation;
