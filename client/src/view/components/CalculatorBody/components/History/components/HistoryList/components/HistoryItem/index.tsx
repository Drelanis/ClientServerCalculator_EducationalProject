import { FC } from 'react';
import { historyField } from '../../../../../../../../classNames/classNamesOfElements';
import { IHistoryItem } from '../../../../../../../../../interfaces/calculatorInterfaces';

interface IHistoryItemProps {
  historyElement: IHistoryItem;
  action: (expression: string, result: string) => void;
}

const HistoryItem: FC<IHistoryItemProps> = ({ historyElement, action }) => {
  return (
    <div
      className={historyField.historyItem}
      onClick={() => action(historyElement.expression, historyElement.result)}
    >
      <span className={historyField.historyItemExpression}>
        {historyElement.expression}
      </span>
      <span className={historyField.historyItemResult}>
        = {historyElement.result}
      </span>
    </div>
  );
};

export default HistoryItem;
