import { useState, useEffect } from 'react';
import Model from '../../model/Model';

const useCalculatationHandler = (
  inputRef: React.MutableRefObject<HTMLTextAreaElement | null>
) => {
  const [result, setResult] = useState('');
  const [isResultLoading, setResultLoading] = useState(false);
  useEffect(() => {
    Model.addSubscribe('newMathResult', showResult);
  }, []);

  const calculate = () => {
    let expression = '';
    if (inputRef.current) {
      if (inputRef.current.value === Model.getExpression()) return;
      expression = inputRef.current.value;
    }
    setResultLoading(true);
    Model.setExpression(expression);
  };

  const showResult = () => {
    const result = Model.getResult().toString();
    setResultLoading(false);
    setResult(result);
  };

  const allClean = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setResult('');
  };

  const inputHistoryItem = (expression: string, result: string) => {
    if (inputRef.current) inputRef.current.value = expression;
    setResult(result);
  };

  return {
    result,
    isResultLoading,
    calculate,
    showResult,
    allClean,
    setResultLoading,
    setResult,
    inputHistoryItem,
  };
};

export default useCalculatationHandler;
