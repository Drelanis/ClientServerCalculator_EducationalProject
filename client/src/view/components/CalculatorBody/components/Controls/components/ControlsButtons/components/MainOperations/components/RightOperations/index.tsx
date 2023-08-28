import { FC, useContext } from 'react';
import { CalculatorConfigContext } from 'view/context';
import { controlButtonsClassNames } from 'view/classNames/classNamesOfElements';
import { IOperations } from 'interfaces/calculatorInterfaces';
import OperationButtons from '../../../../../../common/OperationButtons';
import mainClassNames from 'view/classNames/mainClassNames';
import Equal from '../Equal';

const RightOperations: FC = () => {
  const { config } = useContext(CalculatorConfigContext);
  return (
    <div
      className={`${controlButtonsClassNames.rightMainButtons} ${mainClassNames.operatorsBackground}`}
    >
      <OperationButtons buttons={config.rightMainOperations as IOperations} />
      <Equal />
    </div>
  );
};

export default RightOperations;
