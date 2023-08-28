import { FC } from 'react';
import { optionsClassNames } from 'view/classNames/classNamesOfElements';
import Icon from 'view/common/Icon';
import iconsClassNames from 'view/classNames/icons';

interface IEngineerIconProps extends React.HTMLProps<HTMLDivElement> {}

const EngineerIcon: FC<IEngineerIconProps> = (props) => {
  return (
    <div className={optionsClassNames.containerForEngineer} {...props}>
      <Icon className={iconsClassNames.engineerCalculatorIcon} />
    </div>
  );
};

export default EngineerIcon;
