import { FC } from 'react';
import { historyField } from '../../../../../../../../classNames/classNamesOfElements';
import { IHistoryItem } from '../../../../../../../../../interfaces/calculatorInterfaces';
import Icon from '../../../../../../../../common/Icon';
import iconsClassNames from '../../../../../../../../classNames/icons';

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
      <Icon
        className={iconsClassNames.xmark}
        onClick={(event) => remove(event, historyElement)}
      />
      <div className={historyField.historyItemContainer}>
        <span className={historyField.historyItemExpression}>
          {historyElement.expression}
        </span>
        <span className={historyField.historyItemResult}>
          = {historyElement.result}
        </span>
      </div>
    </div>
  );
};

export default HistoryItem;
