import { FC } from 'react';
import Icon from '../../../../../common/Icon';
import iconsClassNames from '../../../../../classNames/icons';
import { optionsClassNames } from '../../../../../classNames/classNamesOfElements';

interface IHistoryIconProps extends React.HTMLProps<HTMLDivElement> {}

const HistoryIcon: FC<IHistoryIconProps> = (props) => {
  return (
    <div className={optionsClassNames.containerForHistory} {...props}>
      <Icon className={iconsClassNames.historyIcon} />
    </div>
  );
};

export default HistoryIcon;
