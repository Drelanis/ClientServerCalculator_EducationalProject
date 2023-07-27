import { FC, useState, useContext, useEffect, useRef } from 'react';
import { historyField } from '../classNames/classNamesOfElements';
import { CalculatorThemeContext } from '../context';
import darkThemeClassNames from '../classNames/darkThemeClassNames';
import useFetching from '../hooks/useFetching';
import CalculatorApi from '../../api/calculatorApi/CalculatorApi';
import Loader from './UI/Loader';
import Error from './UI/Error';

interface IHistoryItem {
  id: number;
  exression: string;
  result: string;
}

interface ICalculatorHistoryProps {
  setExpression: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

const CalculatorHistory: FC<ICalculatorHistoryProps> = ({
  setExpression,
  setResult,
}) => {
  const { isDarkTheme } = useContext(CalculatorThemeContext);
  const [isHistory, setHistory] = useState([] as IHistoryItem[]);
  const [fetchHistory, historyLoading, historyError] = useFetching(async () => {
    const response = await CalculatorApi.getHistory();
    setHistory([...isHistory, ...response]);
  }) as [() => Promise<void>, boolean, string];

  useEffect(() => {
    fetchHistory();
  }, []);

  const putExressionInInput = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    setExpression(event.currentTarget.children[0].textContent as string);
    const historyItemResult = event.currentTarget.children[1]
      .textContent as string;
    const outputValue = historyItemResult.match(/[0-9]+(?:\.[0-9]+)?/g) as
      | RegExpMatchArray
      | string;
    setResult(outputValue as string);
  };

  return (
    <div
      className={
        isDarkTheme
          ? `${historyField.root} ${darkThemeClassNames.historyContainerDark}`
          : historyField.root
      }
    >
      {historyLoading && (
        <Loader style={{ display: 'flex', marginTop: '170px' }} />
      )}
      {historyError && <Error message={historyError} />}
      {isHistory.map((element, index) => (
        <div
          className={
            isDarkTheme
              ? `${historyField.historyItem} ${darkThemeClassNames.historyItemDark}`
              : historyField.historyItem
          }
          key={element.id}
          onClick={(event) => putExressionInInput(event)}
        >
          <span className={historyField.historyItemExpression}>
            {element.exression}
          </span>
          <span className={historyField.historyItemResult}>
            = {element.result}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CalculatorHistory;
