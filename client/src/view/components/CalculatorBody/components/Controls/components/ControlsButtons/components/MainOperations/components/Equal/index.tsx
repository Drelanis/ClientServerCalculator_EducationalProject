import { FC, useContext } from 'react';
import {
  CalculateContext,
  CalculatorConfigContext,
} from '../../../../../../../../../../context';
import { IOperations } from '../../../../../../../../../../../interfaces/calculatorInterfaces';
import ActionButton from '../../../../../../common/ActionButton';

const Equal: FC = () => {
  const { config } = useContext(CalculatorConfigContext);
  const { calculate } = useContext(CalculateContext);

  return (
    <ActionButton button={config.equal as IOperations} action={calculate} />
  );
};

export default Equal;
