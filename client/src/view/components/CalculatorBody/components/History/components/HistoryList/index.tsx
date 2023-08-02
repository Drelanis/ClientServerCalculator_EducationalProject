import { FC } from 'react';
import { IHistoryItem } from '../../../../../../../interfaces/calculatorInterfaces';
import HistoryItem from './components/HistoryItem';

interface IHistoryListProps {
  elements: IHistoryItem[];
  action: (expression: string, result: string) => void;
}

const HistoryList: FC<IHistoryListProps> = ({ elements, action }) => {
  return (
    <>
      {elements.map((element) => (
        <HistoryItem
          key={element.id}
          historyElement={element}
          action={action}
        />
      ))}
    </>
  );
};

export default HistoryList;
