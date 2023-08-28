import { FC, useContext } from 'react';
import { IOperations } from 'interfaces/calculatorInterfaces';
import ButtonsCreater from './ButtonsCreater';
import { CalculateContext } from 'view/context';

interface IInputButtonsProps {
  buttons: IOperations;
  className: string;
}

const InputButtons: FC<IInputButtonsProps> = ({ buttons, className }) => {
  const { enterButtonValue } = useContext(CalculateContext);
  return (
    <ButtonsCreater
      buttons={buttons}
      className={className}
      action={enterButtonValue}
    />
  );
};

export default InputButtons;
