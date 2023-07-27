import { FC, useContext } from 'react';
import {
  IBinaryOperation,
  IOperations,
  IUnaryOperations,
} from '../../interfaces/calculatorInterfaces';
import { CalculatorThemeContext } from '../context';
import darkThemeClassNames from '../classNames/darkThemeClassNames';

interface CalculatorButtonsProps {
  containerClassNames: string[];
  mainClassNames: string[];
  buttons: IOperations;
  action: (keyboardValue?: string, buttonValue?: string) => void;
  allCleanAction?: () => void;
  calculate?: () => void;
}

const CalculatorButtons: FC<CalculatorButtonsProps> = ({
  containerClassNames = [],
  mainClassNames = [],
  buttons = {},
  action,
  allCleanAction,
  calculate,
}) => {
  const { isDarkTheme } = useContext(CalculatorThemeContext);

  const getButtonHandler = (
    element: [string, IBinaryOperation | IUnaryOperations]
  ) => {
    if (element[0] === 'allClean' && allCleanAction) return allCleanAction();
    if (element[0] === 'equal' && calculate) return calculate();
    return action('', element[1].content);
  };

  return (
    <div className={containerClassNames.join(' ')}>
      {Object.entries(buttons).map((element, index) => {
        return (
          <button
            onClick={() => getButtonHandler(element)}
            key={index}
            id={element[0]}
            className={[
              `${element[0]}-button`,
              ...mainClassNames,
              element[0] === 'equal' && isDarkTheme
                ? `${darkThemeClassNames.equalDark}`
                : '',
            ].join(' ')}
          >
            {element[1].content}
          </button>
        );
      })}
    </div>
  );
};

export default CalculatorButtons;
