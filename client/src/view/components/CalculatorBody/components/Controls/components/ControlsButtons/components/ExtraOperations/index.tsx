import { FC, useContext } from 'react';
import { CalculatorConfigContext } from 'view/context';
import { IOperations } from 'interfaces/calculatorInterfaces';
import mainClassNames from 'view/classNames/mainClassNames';
import { extraControlButtons } from 'view/classNames/classNamesOfElements';
import InputButtons from '../../../../common/InputButtons';

const ExtraOperations: FC = () => {
  const { config } = useContext(CalculatorConfigContext);

  const buttons = {
    ...(config.extraConstance as IOperations),
    ...(config.extraOperationsBinary as IOperations),
    ...(config.extraOperationsUnary as IOperations),
  };

  return (
    <div className={extraControlButtons.root}>
      <InputButtons
        buttons={buttons as IOperations}
        className={`${mainClassNames.number} ${mainClassNames.mainButtons}`}
      />
    </div>
  );
};

export default ExtraOperations;
