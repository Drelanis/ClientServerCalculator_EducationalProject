import { toast } from 'react-toastify';
import { FC } from 'react';
import HistoryList from './components/HistoryList';
import usePagination from '../../../../hooks/usePagination';
import CalculatorApi from '../../../../../api/calculatorApi/CalculatorApi';
import { historyField } from '../../../../classNames/classNamesOfElements';
import Error from '../../../../common/Error';
import Loader from '../../../../common/Loader';
import {
  IErrorResponse,
  IHistoryItem,
} from '../../../../../interfaces/calculatorInterfaces';

interface IHistoryProps {
  input: (expression: string, result: string) => void;
}

const History: FC<IHistoryProps> = ({ input }) => {
  const fetchHistoryData = async (page: number, limit: number) => {
    return await CalculatorApi.getHistory(page, limit);
  };

  const { data, isLoading, error, lastElementRef, removeItem } =
    usePagination<IHistoryItem>(fetchHistoryData);

  const removeHistoryItem = async (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    historyItem: IHistoryItem
  ) => {
    event.stopPropagation();
    const response = (await CalculatorApi.removeHistoryItem(
      historyItem._id
    )) as IErrorResponse;
    if (response.isError) return toast.error(response.errorMessage);
    removeItem(historyItem._id);
  };

  return (
    <div className={historyField.root}>
      {isLoading && <Loader style={{ margin: '160px' }} />}
      <Error message={error as string} />
      <HistoryList
        elements={data as IHistoryItem[]}
        input={input}
        remove={removeHistoryItem}
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
