import { FC } from 'react';
import { errorClassNames } from '../../../classNames/classNamesOfElements';
import iconsClassNames from '../../../classNames/icons';
import Icon from '../../../common/Icon';

type ErrorProps = {
  message: string;
};

const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <div className={errorClassNames.container}>
      <div className={errorClassNames.containerForIcon}>
        <Icon className={iconsClassNames.errorIcon} />
      </div>
      <span className={errorClassNames.text}>{message}</span>
    </div>
  );
};

export default Error;
