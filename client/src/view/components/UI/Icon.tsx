import { FC } from 'react';
import iconsClassNames from '../../classNames/icons';

interface IIconProps {
  rootClassName: string;
  iconClassNames: string;
  onClick?: () => void;
}

const Icon: FC<IIconProps> = ({ iconClassNames, rootClassName, onClick }) => {
  return (
    <div className={rootClassName} onClick={onClick}>
      <i
        className={[iconsClassNames.mainClassName, iconClassNames].join(' ')}
      ></i>
    </div>
  );
};

export default Icon;
