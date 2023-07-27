import { FC, useContext, useState, useRef, useEffect } from 'react';
import { calculator } from '../classNames/classNamesOfElements';
import CalculatorOptions from './CalculatorOptions';
import CalculatorExpressionInput from './CalculatorExpressionInput';
import CalculatorResultOutput from './CalculatorResultOutput';
import CalculatorControlButtons from './CalculatorControlButtons';
import { CalculatorThemeContext } from '../context';
import darkThemeClassNames from '../classNames/darkThemeClassNames';
import CalculatorHistory from './CalculatorHistory';
import IModel from '../../model/IModel';
import Error from './UI/Error';

interface CalculatorBodyProps {
  model: IModel;
}

const CalculatorBody: FC<CalculatorBodyProps> = ({ model }) => {
  const { isDarkTheme } = useContext(CalculatorThemeContext);
  const [isExtraOperation, setExtraOperation] = useState(false);
  const [isHistory, setHistory] = useState(false);
  const [isExpression, setExpression] = useState('');
  const [isResult, setResult] = useState('');
  const [isErrorMessage, setErrorMessage] = useState<string | undefined>();
  const [isResultLoading, setResultLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    model.addSubscribe('newMathResult', renderResult);
    model.addSubscribe('renderError', renderError);
  }, []);

  const exressionInput = (
    keyboardValue: string = '',
    buttonValue: string = ''
  ): void => {
    const inputField = inputRef.current as unknown as HTMLInputElement;
    const cursorPosition: number =
      inputField.selectionStart as unknown as number;
    if (buttonValue) {
      const currentValue: string = inputField.value;
      const newValue =
        currentValue.slice(0, cursorPosition) +
        buttonValue +
        currentValue.slice(cursorPosition);
      inputField.focus();
      inputField.value = newValue;
      setExpression(newValue);
      inputField.setSelectionRange(
        cursorPosition + buttonValue.length,
        cursorPosition + buttonValue.length
      );
      return;
    }
    setExpression(keyboardValue);
  };

  const allClean = () => {
    model.setExpression('');
    setExpression('');
  };

  const calculateExpression = () => {
    if (isExpression === '') {
      setResult('0');
      return;
    }
    if (model.getExpression() === isExpression) return;
    setResultLoading(true);
    model.setExpression(isExpression);
  };

  const renderError = () => {
    if (model.getErrorMessage())
      setErrorMessage(model.getErrorMessage()?.toString());
  };

  const renderResult = (context: IModel) => {
    setResultLoading(false);
    setResult(context.getResult().toString());
  };

  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  return (
    <div
      className={
        isDarkTheme
          ? `${calculator.root} ${darkThemeClassNames.calculatorDark}`
          : calculator.root
      }
      onClick={clearErrorMessage}
    >
      <CalculatorOptions
        setExtraOperation={setExtraOperation}
        isExtraOperation={isExtraOperation}
        setHistory={setHistory}
        isHistory={isHistory}
      />
      <CalculatorExpressionInput
        isExpression={isExpression}
        expressionInput={exressionInput}
        inputRef={inputRef}
      />
      {isErrorMessage && <Error message={isErrorMessage} />}
      <CalculatorResultOutput
        result={isResult}
        resultLoading={isResultLoading}
      />
      <CalculatorControlButtons
        expressionInput={exressionInput}
        allCleanAction={allClean}
        isExtraOperation={isExtraOperation}
        calculate={calculateExpression}
      />
      {isHistory ? <CalculatorHistory setExpression={setExpression} /> : <></>}
    </div>
  );
};

export default CalculatorBody;
