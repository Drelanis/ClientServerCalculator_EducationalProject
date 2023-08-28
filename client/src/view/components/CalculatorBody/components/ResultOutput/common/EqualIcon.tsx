import { FC } from 'react';
import Icon from 'view/common/Icon';
import { outputClassNames } from 'view/classNames/classNamesOfElements';
import iconsClassNames from 'view/classNames/icons';

const EqualIcon: FC = () => {
  return (
    <div className={outputClassNames.equalIcon}>
      <Icon className={iconsClassNames.equalIcon} />
    </div>
  );
};

export default EqualIcon;
