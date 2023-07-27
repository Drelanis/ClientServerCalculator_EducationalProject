import { FC } from 'react';
import { errorClassNames } from '../../classNames/classNamesOfElements';
import Icon from './Icon';
import iconsClassNames from '../../classNames/icons';

type ErrorProps = {
  message: string;
};

const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <div className={errorClassNames.container}>
      <Icon
        rootClassName={errorClassNames.containerForIcon}
        iconClassNames={iconsClassNames.errorIcon}
      ></Icon>
      <span className={errorClassNames.text}>{message}</span>
    </div>
  );
};

export default Error;
