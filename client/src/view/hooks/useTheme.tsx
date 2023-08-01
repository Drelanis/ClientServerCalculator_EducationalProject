import { useState } from 'react';
import { calculator } from '../classNames/classNamesOfElements';
import darkThemeClassNames from '../classNames/darkThemeClassNames';

const useTheme = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const bodyClassName = isDarkTheme
    ? `${calculator.root} ${darkThemeClassNames.calculatorDark}`
    : calculator.root;

  return { bodyClassName, isDarkTheme, setDarkTheme };
};

export default useTheme;
