enum calculator {
  root = 'calculator',
}

enum optionsClassNames {
  root = 'calculator__options',
  containerForEngineer = 'calculator__options_engineer',
  containerForHistory = 'calculator__options_history',
  containerForToggleTheme = 'calculator__options_toggle-theme',
  classNameForToogleInput = 'calculator__options_toggle-theme-toggle',
  classNameForToogleSpan = 'calculator__options_toggle-theme-slider',
}

enum historyField {
  root = 'calculator__history',
  historyItem = 'calculator__history_item',
  historyItemContainer = 'calculator__history_item-container',
  historyItemExpression = 'calculator__history_item-container-expression',
  historyItemResult = 'calculator__history_item-container-result',
}

enum inputClassNames {
  root = 'calculator__expression-input',
  inputField = 'calculator-input-field',
}

enum outputClassNames {
  root = 'calculator__result-output',
  equalIcon = 'calculator__result-output_equal',
  resultField = 'calculator__result-output_result',
}

enum controlButtonsClassNames {
  root = 'calculator__control-buttons',
  mainButtons = 'calculator__control-buttons_numbers-point',
  topMainButtons = 'calculator__control-buttons_top-operators',
  rightMainButtons = 'calculator__control-buttons_operators',
  operationsBackground = 'operations-background',
}

enum errorClassNames {
  root = 'calculator__expression-input',
  container = 'calculator__error',
  containerForIcon = 'calculator__error_icon',
  text = 'calculator__error_text',
}

enum extraClassNames {
  equalButton = 'equal-button',
}

enum extraControlButtons {
  root = 'calculator__control-buttons_extra-actions',
}

enum spinnerClassNames {
  root = 'spinner',
}

enum title {
  root = 'calculator__history_title',
}

export {
  extraClassNames,
  calculator,
  optionsClassNames,
  inputClassNames,
  outputClassNames,
  errorClassNames,
  controlButtonsClassNames,
  historyField,
  extraControlButtons,
  spinnerClassNames,
  title,
};
