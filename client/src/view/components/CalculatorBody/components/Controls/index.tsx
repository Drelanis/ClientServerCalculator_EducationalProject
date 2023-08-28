import { FC, useContext } from 'react';
import { controlButtonsClassNames } from 'view/classNames/classNamesOfElements';
import { CalculateContext, CalculatorConfigContext } from 'view/context';
import Loader from 'view/common/Loader';
import Error from 'view/common/Error';
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
        <Error message={configError} />
        {<ControlButtons isExtraOperation={isExtraOperation} />}
      </div>
    </CalculateContext.Provider>
  );
};

export default Controls;
