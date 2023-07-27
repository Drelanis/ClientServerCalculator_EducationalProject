import { FC, useContext } from 'react';
import { inputClassNames } from '../classNames/classNamesOfElements';
import { CalculatorThemeContext } from '../context';
import darkThemeClassNames from '../classNames/darkThemeClassNames';

interface CalculatorExpressionInputProps {
  isExpression: string;
  expressionInput: (value: string) => void;
  inputRef: React.MutableRefObject<null>;
}

const CalculatorExpressionInput: FC<CalculatorExpressionInputProps> = ({
  isExpression,
  expressionInput,
  inputRef,
}) => {
  const { isDarkTheme } = useContext(CalculatorThemeContext);

  return (
    <div className={inputClassNames.root}>
      <textarea
        ref={inputRef}
        value={isExpression}
        onChange={(event) => {
          expressionInput(event.target.value);
        }}
        className={
          isDarkTheme
            ? `${inputClassNames.inputField} ${darkThemeClassNames.inputFieldDark}`
            : inputClassNames.inputField
        }
        placeholder="Expression input"
      ></textarea>
    </div>
  );
};

export default CalculatorExpressionInput;
