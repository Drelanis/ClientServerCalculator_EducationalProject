import { FC } from 'react';
import iconsClassNames from '../../classNames/icons';

interface IToggle {
  rootClassName: string;
  inputClassName: string;
  spanClassName: string;
  firstIcon: string;
  secondIcon: string;
  [key: string]: any;
}

const Toggle: FC<IToggle> = ({
  rootClassName,
  inputClassName,
  spanClassName,
  firstIcon,
  secondIcon,
  style = {},
  toggle,
}) => {
  return (
    <label className={rootClassName} style={{ ...style }}>
      <input className={inputClassName} type="checkbox" onChange={toggle} />
      <span className={spanClassName}>
        <i className={[iconsClassNames.mainClassName, firstIcon].join(' ')}></i>
        <i
          className={[iconsClassNames.mainClassName, secondIcon].join(' ')}
        ></i>
      </span>
    </label>
  );
};

export default Toggle;
