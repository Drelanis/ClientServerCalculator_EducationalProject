import { FC } from 'react';
import iconsClassNames from 'view/classNames/icons';
import Icon from 'view/common/Icon';

const LightThemeIcon: FC = () => {
  return <Icon className={`${iconsClassNames.darkThemeIcon}`} />;
};

export default LightThemeIcon;
