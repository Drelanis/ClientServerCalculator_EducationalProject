import { FC } from 'react';
import { IOperations } from '../../../../../../interfaces/calculatorInterfaces';
import InputButtons from './InputButtons';
import mainClassNames from '../../../../../classNames/mainClassNames';

interface IOperationButtonsProps {
  buttons: IOperations;
}

const OperationButtons: FC<IOperationButtonsProps> = ({ buttons }) => {
  return (
    <InputButtons
      className={`${mainClassNames.operation} ${mainClassNames.mainButtons}`}
      buttons={buttons as IOperations}
    />
  );
};

export default OperationButtons;
