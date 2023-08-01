import { FC, useContext } from 'react';
import { CalculatorConfigContext } from '../../../../../../../../../../context';
import { IOperations } from '../../../../../../../../../../../interfaces/calculatorInterfaces';
import ActionButton from '../../../../../../common/ActionButton';

interface IAllCleanProps {
  allClean: () => void;
}

const AllClean: FC<IAllCleanProps> = ({ allClean }) => {
  const { config } = useContext(CalculatorConfigContext);
  return (
    <ActionButton
      button={config.allClean as IOperations}
      action={() => allClean()}
    />
  );
};

export default AllClean;
