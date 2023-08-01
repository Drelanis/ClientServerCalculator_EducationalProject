import { FC } from 'react';
import iconsClassNames from '../classNames/icons';

interface IIconProps extends React.HTMLProps<HTMLLIElement> {}

const Icon: FC<IIconProps> = ({ className, ...props }) => {
  return (
    <i
      className={`${iconsClassNames.mainClassName} ${className}`}
      {...props}
    ></i>
  );
};

export default Icon;
