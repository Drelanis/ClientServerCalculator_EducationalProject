import { FC, useEffect, useState } from 'react';
import useFetching from '../../../../hooks/useFetching';
import CalculatorApi from '../../../../../api/calculatorApi/CalculatorApi';
import { historyField } from '../../../../classNames/classNamesOfElements';
import Error from '../../common/Error';
import Loader from '../../common/Loader';
import { IHistoryItem } from '../../../../../interfaces/calculatorInterfaces';
import HistoryList from './components/HistoryList';

interface IHistoryProps {
  action: (expression: string, result: string) => void;
}

const History: FC<IHistoryProps> = ({ action }) => {
  const [isHistory, setHistory] = useState([] as IHistoryItem[]);

  const [fetchHistory, historyLoading, historyError] = useFetching(async () => {
    const response = await CalculatorApi.getHistory();
    setHistory([...isHistory, ...response]);
  }) as [() => Promise<void>, boolean, string];

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className={historyField.root}>
      {historyLoading && (
        <Loader style={{ display: 'flex', marginTop: '170px' }} />
      )}
      {historyError && <Error message={historyError} />}
      {<HistoryList elements={isHistory} action={action} />}
    </div>
  );
};

export default History;
