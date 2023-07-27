import { FC, useContext } from 'react';
import { outputClassNames } from '../classNames/classNamesOfElements';
import { CalculatorThemeContext } from '../context';
import darkThemeClassNames from '../classNames/darkThemeClassNames';
import Loader from './UI/Loader';

interface CalculatorResultOutputProps {
  result: string;
  resultLoading: boolean;
}

const CalculatorResultOutput: FC<CalculatorResultOutputProps> = ({
  result,
  resultLoading,
}) => {
  const { isDarkTheme } = useContext(CalculatorThemeContext);

  return (
    <div className={outputClassNames.root}>
      <span
        className={
          isDarkTheme
            ? `${outputClassNames.equalIcon} ${darkThemeClassNames.resultOutputDark}`
            : outputClassNames.equalIcon
        }
      >
        =
      </span>
      <span
        className={
          isDarkTheme
            ? `${outputClassNames.resultField} ${darkThemeClassNames.resultOutputDark}`
            : outputClassNames.resultField
        }
      >
        {resultLoading && (
          <Loader
            style={{ height: '20px', width: '20px', borderWidth: '5px' }}
          />
        )}
        {!resultLoading && result}
        {!result && 0}
      </span>
    </div>
  );
};

export default CalculatorResultOutput;

// <Loader style={{ height: '20px', width: '20px', borderWidth: '5px' }}/>;
