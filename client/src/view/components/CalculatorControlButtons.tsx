import { FC, useContext } from 'react';
import { controlButtonsClassNames } from '../classNames/classNamesOfElements';
import Loader from './UI/Loader';
import { CalculatorConfigContext, CalculatorThemeContext } from '../context';
import Error from './UI/Error';
import darkThemeClassNames from '../classNames/darkThemeClassNames';
import CalculatorExtraOperations from './CalculatorExtraOperation';
import CalculatorMainOperation from './CalculatorMainOperation';

interface CalculatorControlButtonsProps {
  isExtraOperation: boolean;
  expressionInput: (keyboardValue?: string, buttonValue?: string) => void;
  allCleanAction: () => void;
  calculate: () => void;
}

const CalculatorControlButtons: FC<CalculatorControlButtonsProps> = ({
  isExtraOperation,
  expressionInput,
  allCleanAction,
  calculate,
}) => {
  const { configLoading, configError } = useContext(CalculatorConfigContext);
  const { isDarkTheme } = useContext(CalculatorThemeContext);

  return (
    <div
      className={
        isDarkTheme
          ? `${controlButtonsClassNames.root} ${darkThemeClassNames.controlButtonsDark}`
          : controlButtonsClassNames.root
      }
    >
      {configLoading && <Loader />}
      {configError ? (
        <Error message={configError}></Error>
      ) : isExtraOperation ? (
        <CalculatorExtraOperations expressionInput={expressionInput} />
      ) : (
        <CalculatorMainOperation
          expressionInput={expressionInput}
          allCleanAction={allCleanAction}
          calculate={calculate}
        />
      )}
    </div>
  );
};

export default CalculatorControlButtons;
