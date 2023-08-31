import { FC } from 'react';
import HistoryList from './components/HistoryList';
import { historyField } from 'view/classNames/classNamesOfElements';
import Error from 'view/common/Error';
import Loader from 'view/common/Loader';
import { IHistoryItem } from 'interfaces/calculatorInterfaces';
import HistoryAPI from 'api/calculatorApi/HistoryAPI';
import useList from 'view/hooks/useList';

interface IHistoryProps {
  input: (expression: string, result: string) => void;
}

const History: FC<IHistoryProps> = ({ input }) => {
  const { data, isLoading, error, lastElementRef, removeItem } =
    useList<IHistoryItem>(HistoryAPI);

  return (
    <div className={historyField.root}>
      {isLoading && <Loader style={{ margin: '160px' }} />}
      <Error message={error as string} />
      <HistoryList
        elements={data as IHistoryItem[]}
        input={input}
        remove={removeItem}
      />
      <div ref={lastElementRef} style={{ height: '5px' }}></div>
      {isLoading && (
        <Loader
          style={{ height: '20px', width: '20px', marginLeft: '200px' }}
        />
      )}
    </div>
  );
};

export default History;
