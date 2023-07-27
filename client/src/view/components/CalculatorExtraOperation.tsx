import { FC, useContext } from 'react';
import { extraControlButtons } from '../classNames/classNamesOfElements';
import CalculatorButtons from './CalculatorButtons';
import mainClassNames from '../classNames/mainClassNames';
import { CalculatorConfigContext, CalculatorThemeContext } from '../context';
import { IOperations } from '../../interfaces/calculatorInterfaces';
import darkThemeClassNames from '../classNames/darkThemeClassNames';

interface CalculatorExtraOperationsProps {
  expressionInput: (keyboardValue?: string, buttonValue?: string) => void;
}

const CalculatorExtraOperations: FC<CalculatorExtraOperationsProps> = ({
  expressionInput,
}) => {
  const { config } = useContext(CalculatorConfigContext);
  const { isDarkTheme } = useContext(CalculatorThemeContext);

  return (
    <CalculatorButtons
      containerClassNames={[extraControlButtons.root]}
      mainClassNames={[
        mainClassNames.number,
        isDarkTheme
          ? `${mainClassNames.mainButtons} ${darkThemeClassNames.mainButtonDark} ${darkThemeClassNames.numbersDark}`
          : mainClassNames.mainButtons,
      ]}
      buttons={{
        ...(config.extraConstance as IOperations),
        ...(config.extraOperationsBinary as IOperations),
        ...(config.extraOperationsUnary as IOperations),
      }}
      action={expressionInput}
    ></CalculatorButtons>
  );
};

export default CalculatorExtraOperations;
