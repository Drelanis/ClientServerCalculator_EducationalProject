import { FC } from 'react';
import { optionsClassNames } from '../../../../../classNames/classNamesOfElements';
import Icon from '../../../../../common/Icon';
import iconsClassNames from '../../../../../classNames/icons';

interface IEngineerIconProps extends React.HTMLProps<HTMLDivElement> {}

const EngineerIcon: FC<IEngineerIconProps> = (props) => {
  return (
    <div className={optionsClassNames.containerForEngineer} {...props}>
      <Icon className={iconsClassNames.engineerCalculatorIcon} />
    </div>
  );
};

export default EngineerIcon;
