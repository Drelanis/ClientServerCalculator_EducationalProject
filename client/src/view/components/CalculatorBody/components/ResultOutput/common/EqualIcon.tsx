import { FC } from 'react';
import Icon from '../../../../../common/Icon';
import { outputClassNames } from '../../../../../classNames/classNamesOfElements';
import iconsClassNames from '../../../../../classNames/icons';

const EqualIcon: FC = () => {
  return (
    <div className={outputClassNames.equalIcon}>
      <Icon className={iconsClassNames.equalIcon} />
    </div>
  );
};

export default EqualIcon;
