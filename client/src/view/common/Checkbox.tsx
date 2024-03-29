import { FC } from 'react';
import { optionsClassNames } from 'view/classNames/classNamesOfElements';

const Checkbox: FC = () => {
  return (
    <input
      className={optionsClassNames.classNameForToogleInput}
      type="checkbox"
    />
  );
};

export default Checkbox;
