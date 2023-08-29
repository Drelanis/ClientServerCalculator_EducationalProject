import { FC } from 'react';
import { historyField } from 'view/classNames/classNamesOfElements';
import { IHistoryItem } from 'interfaces/calculatorInterfaces';
import Icon from 'view/common/Icon';
import iconsClassNames from 'view/classNames/icons';

interface IHistoryItemProps {
  historyElement: IHistoryItem;
  action: (expression: string, result: string) => void;
  remove: (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    historyItem: IHistoryItem
  ) => void;
}

const HistoryItem: FC<IHistoryItemProps> = ({
  historyElement,
  action,
  remove,
}) => {
  return (
    <div
      className={historyField.historyItem}
      onClick={() => action(historyElement.expression, historyElement.result)}
    >
      <div className={historyField.historyItemContainer}>
        <span className={historyField.historyItemExpression}>
          {historyElement.expression}
        </span>
        <span className={historyField.historyItemResult}>
          = {historyElement.result}
        </span>
      </div>
      <Icon
        className={iconsClassNames.xmark}
        onClick={(event) => remove(event, historyElement)}
      />
    </div>
  );
};

export default HistoryItem;
