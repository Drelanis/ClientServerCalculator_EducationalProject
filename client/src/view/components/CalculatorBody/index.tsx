import { FC, useRef } from 'react';
import Options from './components/Options';
import ConfigContextProvider from './common/ConfigContextProvider';
import ExpressionInput from './components/ExressionInput';
import ResultOutput from './components/ResultOutput';
import Controls from './components/Controls';
import History from './/components/History';
import Error from '../../common/Error';
import useTheme from '../../hooks/useTheme';
import useToggleFields from '../../hooks/useToggleFields';
import useCalculatationHandler from '../../hooks/useCalculatationHandler';
import useErrorHandler from '../../hooks/useErrorHandler';
import useInputHandler from '../../hooks/useInputHandler';

const CalculatorBody: FC = () => {
  const { bodyClassName, isDarkTheme, setDarkTheme } = useTheme();
  const { isExtraOperation, setExtraOperation, isHistory, setHistory } =
    useToggleFields();
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const { result, isResultLoading, calculate, allClean, inputHistoryItem } =
    useCalculatationHandler(inputRef);
  const { error, removeError } = useErrorHandler();
  const { enterButtonValue } = useInputHandler(inputRef);

  return (
    <ConfigContextProvider>
      <div className={bodyClassName} onClick={removeError}>
        <Options
          isDarkTheme={isDarkTheme}
          toggleTheme={setDarkTheme}
          isExtraOperation={isExtraOperation}
          toggleOperations={setExtraOperation}
          isHistory={isHistory}
          toggleHistory={setHistory}
        />
        <ExpressionInput inputRef={inputRef} />
        {error && <Error message={`${error}`} />}
        <ResultOutput result={result} isLoad={isResultLoading} />
        <Controls
          isExtraOperation={isExtraOperation}
          calculate={calculate}
          allClean={allClean}
          enterButtonValue={enterButtonValue}
        />
        {isHistory && <History input={inputHistoryItem} />}
      </div>
    </ConfigContextProvider>
  );
};

export default CalculatorBody;
