import { FC, useContext } from 'react';
import { CalculateContext, CalculatorConfigContext } from 'view/context';
import { controlButtonsClassNames } from 'view/classNames/classNamesOfElements';
import { IOperations } from 'interfaces/calculatorInterfaces';
import OperationButtons from '../../../../../../common/OperationButtons';
import AllClean from '../AllClean';
import mainClassNames from 'view/classNames/mainClassNames';

const TopOperations: FC = () => {
  const { config } = useContext(CalculatorConfigContext);
  const { allClean } = useContext(CalculateContext);
  return (
    <div
      className={`${controlButtonsClassNames.topMainButtons} ${mainClassNames.operatorsBackground}`}
    >
      <AllClean allClean={allClean} />
      <OperationButtons buttons={config.topMainOperations as IOperations} />
    </div>
  );
};

export default TopOperations;
