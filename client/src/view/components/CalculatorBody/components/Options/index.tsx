import { FC, useContext, Dispatch, SetStateAction } from 'react';
import { optionsClassNames } from '../../../../classNames/classNamesOfElements';
import Toggle from './common/Toggle';
import HistoryIcon from './common/HistoryIcon';
import { CalculatorConfigContext } from '../../../../context';
import EngineerIcon from './common/EngineerIcon';

type ToggleHandler = Dispatch<SetStateAction<boolean>>;

interface IOptionsProps {
  toggleTheme: ToggleHandler;
  toggleOperations: ToggleHandler;
  toggleHistory: ToggleHandler;
  isDarkTheme: boolean;
  isExtraOperation: boolean;
  isHistory: boolean;
}

const Options: FC<IOptionsProps> = ({
  toggleTheme,
  isDarkTheme,
  toggleOperations,
  isExtraOperation,
  toggleHistory,
  isHistory,
}) => {
  const { config } = useContext(CalculatorConfigContext);

  const setTheme = () => toggleTheme(!isDarkTheme);
  const setOperations = () => toggleOperations(!isExtraOperation);
  const setHistory = () => toggleHistory(!isHistory);

  return (
    <div className={optionsClassNames.root}>
      {config.isExtraOperations && (
        <EngineerIcon onClick={() => setOperations()} />
      )}
      <Toggle
        style={config.isExtraOperations ? { marginLeft: 0 } : {}}
        onChange={() => setTheme()}
      />
      <HistoryIcon onClick={() => setHistory()} />
    </div>
  );
};

export default Options;
