import { FC, useContext } from 'react';
import { controlButtonsClassNames } from '../../../../classNames/classNamesOfElements';
import { CalculateContext, CalculatorConfigContext } from '../../../../context';
import Loader from '../../../../common/Loader';
import Error from '../../../../common/Error';
import ControlButtons from './components/ControlsButtons';

interface IOptionsProps {
  isExtraOperation: boolean;
  calculate: () => void;
  allClean: () => void;
  enterButtonValue: () => void;
}

const Controls: FC<IOptionsProps> = ({
  isExtraOperation,
  calculate,
  allClean,
  enterButtonValue,
}) => {
  const { configLoading, configError } = useContext(CalculatorConfigContext);
  return (
    <CalculateContext.Provider
      value={{ calculate, allClean, enterButtonValue }}
    >
      <div className={controlButtonsClassNames.root}>
        {configLoading && <Loader />}
        {configError && <Error message={configError} />}
        {<ControlButtons isExtraOperation={isExtraOperation} />}
      </div>
    </CalculateContext.Provider>
  );
};

export default Controls;
