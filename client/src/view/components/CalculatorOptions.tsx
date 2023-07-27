import { ChangeEvent, FC, useContext } from 'react';
import { optionsClassNames } from '../classNames/classNamesOfElements';
import Icon from './UI/Icon';
import iconsClassNames from '../classNames/icons';
import Toggle from './UI/Toggle';
import { CalculatorConfigContext, CalculatorThemeContext } from '../context';
import darkThemeClassNames from '../classNames/darkThemeClassNames';

interface CalculatorOptionsProps {
  setExtraOperation: React.Dispatch<React.SetStateAction<boolean>>;
  isExtraOperation: boolean;
  setHistory: React.Dispatch<React.SetStateAction<boolean>>;
  isHistory: boolean;
}

const CalculatorOptions: FC<CalculatorOptionsProps> = ({
  setExtraOperation,
  isExtraOperation,
  setHistory,
  isHistory,
}) => {
  const { config } = useContext(CalculatorConfigContext);
  const { isDarkTheme, setDarkTheme } = useContext(CalculatorThemeContext);

  const themeChanger = (event: ChangeEvent<HTMLInputElement>): void => {
    setDarkTheme(event.target.checked);
  };

  const renderExtraOperation = (): void => {
    isExtraOperation ? setExtraOperation(false) : setExtraOperation(true);
  };

  const renderHistoryField = (): void => {
    isHistory ? setHistory(false) : setHistory(true);
  };

  return (
    <div className={optionsClassNames.root}>
      {config.isExtraOperations && (
        <Icon
          rootClassName={
            isDarkTheme
              ? `${optionsClassNames.containerForEngineer} ${darkThemeClassNames.engineerOptionsDark}`
              : optionsClassNames.containerForEngineer
          }
          iconClassNames={iconsClassNames.engineerCalculatorIcon}
          onClick={() => renderExtraOperation()}
        />
      )}
      <Toggle
        rootClassName={optionsClassNames.containerForToggleTheme}
        inputClassName={optionsClassNames.classNameForToogleInput}
        spanClassName={optionsClassNames.classNameForToogleSpan}
        firstIcon={iconsClassNames.lightThemeIcon}
        secondIcon={iconsClassNames.darkThemeIcon}
        style={config.isExtraOperations && { marginLeft: '0px' }}
        toggle={(event: ChangeEvent<HTMLInputElement>) => themeChanger(event)}
      ></Toggle>
      <Icon
        rootClassName={
          isDarkTheme
            ? `${optionsClassNames.containerForHistory} ${darkThemeClassNames.historyDark}`
            : optionsClassNames.containerForHistory
        }
        iconClassNames={iconsClassNames.historyIcon}
        onClick={() => renderHistoryField()}
      />
    </div>
  );
};

export default CalculatorOptions;
