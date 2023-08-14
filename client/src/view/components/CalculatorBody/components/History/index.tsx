import { FC, useEffect, useState } from 'react';
import useFetching from '../../../../hooks/useFetching';
import CalculatorApi from '../../../../../api/calculatorApi/CalculatorApi';
import { historyField } from '../../../../classNames/classNamesOfElements';
import Error from '../../../../common/Error';
import Loader from '../../../../common/Loader';
import { IHistoryItem } from '../../../../../interfaces/calculatorInterfaces';
import HistoryList from './components/HistoryList';

interface IHistoryProps {
  input: (expression: string, result: string) => void;
}

const History: FC<IHistoryProps> = ({ input }) => {
  const [isHistory, setHistory] = useState([] as IHistoryItem[]);
  const [fetchHistory, historyLoading, historyError] = useFetching(async () => {
    const response = await CalculatorApi.getHistory();
    setHistory([...isHistory, ...response].flat());
  }) as [() => Promise<void>, boolean, string];

  useEffect(() => {
    fetchHistory();
  }, []);

  const removeHistoryItem = async (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    historyItem: IHistoryItem
  ) => {
    event.stopPropagation();
    await CalculatorApi.removeHistoryItem(historyItem._id);
    setHistory(isHistory.filter((element) => element._id !== historyItem._id));
  };

  return (
    <div className={historyField.root}>
      {historyLoading && <Loader style={{ margin: '160px' }} />}
      {historyError && <Error message={historyError} />}
      {!historyLoading && (
        <HistoryList
          elements={isHistory}
          input={input}
          remove={removeHistoryItem}
        />
      )}
    </div>
  );
};

export default History;
