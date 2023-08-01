import { FC, useContext } from 'react';
import { controlButtonsClassNames } from '../../../../../../../../../../classNames/classNamesOfElements';
import { CalculatorConfigContext } from '../../../../../../../../../../context';
import InputButtons from '../../../../../../common/InputButtons';
import { IOperations } from '../../../../../../../../../../../interfaces/calculatorInterfaces';
import mainClassNames from '../../../../../../../../../../classNames/mainClassNames';

const Numbers: FC = () => {
  const { config } = useContext(CalculatorConfigContext);
  return (
    <div className={controlButtonsClassNames.mainButtons}>
      <InputButtons
        buttons={config.numbers as IOperations}
        className={`${mainClassNames.number} ${mainClassNames.mainButtons}`}
      />
    </div>
  );
};

export default Numbers;
