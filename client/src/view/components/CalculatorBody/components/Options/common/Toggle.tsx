import { FC } from 'react';
import { optionsClassNames } from '../../../../../classNames/classNamesOfElements';
import Checkbox from '../../../../UI/Checkbox';
import DarkThemeIcon from './DarkThemeIcon';
import LightThemeIcon from './LightThemeIcon';

interface IToggleProps extends React.HTMLProps<HTMLLabelElement> {}

const Toggle: FC<IToggleProps> = (props) => {
  return (
    <label className={optionsClassNames.containerForToggleTheme} {...props}>
      <Checkbox />
      <span className={optionsClassNames.classNameForToogleSpan}>
        <DarkThemeIcon />
        <LightThemeIcon />
      </span>
    </label>
  );
};

export default Toggle;
