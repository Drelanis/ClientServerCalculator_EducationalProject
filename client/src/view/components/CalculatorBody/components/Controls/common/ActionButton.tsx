import { FC } from 'react';
import { IOperations } from '../../../../../../interfaces/calculatorInterfaces';
import mainClassNames from '../../../../../classNames/mainClassNames';
import ButtonsCreater from './ButtonsCreater';

interface IActionButtonProps {
  button: IOperations;
  action: () => void;
}

const ActionButton: FC<IActionButtonProps> = ({ button, action }) => {
  return (
    <ButtonsCreater
      buttons={button}
      className={`${mainClassNames.operation} ${mainClassNames.mainButtons}`}
      action={action}
    />
  );
};

export default ActionButton;
