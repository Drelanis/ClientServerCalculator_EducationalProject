import { FC, useEffect, useState, useRef } from 'react';
import useFetching from '../../../../hooks/useFetching';
import CalculatorApi from '../../../../../api/calculatorApi/CalculatorApi';
import { historyField } from '../../../../classNames/classNamesOfElements';
import Error from '../../../../common/Error';
import Loader from '../../../../common/Loader';
import { IHistoryItem } from '../../../../../interfaces/calculatorInterfaces';
import HistoryList from './components/HistoryList';
import useObserver from '../../../../hooks/useObserver';
import { getPageCount } from '../../../../../utils/pages';

interface IHistoryProps {
  input: (expression: string, result: string) => void;
}

const History: FC<IHistoryProps> = ({ input }) => {
  const limit = 5;
  const lastElement = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isHistory, setHistory] = useState([] as IHistoryItem[]);
  const [fetchHistory, isHistoryLoading, historyError] = useFetching(
    async () => {
      const response = await CalculatorApi.getHistory(page, limit);
      setTotalPages(getPageCount(response.totalCount, limit));
      setHistory([...isHistory, ...response.histories].flat());
    }
  ) as [() => Promise<void>, boolean, string];

  useObserver(lastElement, page < totalPages, isHistoryLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchHistory();
  }, [page]);

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
      {isHistoryLoading && <Loader style={{ margin: '160px' }} />}
      {historyError && <Error message={historyError} />}
      {
        <>
          <HistoryList
            elements={isHistory}
            input={input}
            remove={removeHistoryItem}
          />
          <div ref={lastElement} style={{ height: '5px' }}></div>
          {isHistoryLoading && (
            <Loader
              style={{ height: '20px', width: '20px', marginLeft: '200px' }}
            />
          )}
        </>
      }
    </div>
  );
};

export default History;
