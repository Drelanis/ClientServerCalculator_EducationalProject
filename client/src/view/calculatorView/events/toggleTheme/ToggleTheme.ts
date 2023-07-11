import {
  calculator,
  calculatorControlButtons,
  extraClassNames,
  historyField,
  inputClassNames,
  optionsClassNames,
  outputClassNames,
} from '../../classNames/classNamesOfElements';
import darkThemeClassNames from '../../classNames/darkThemeClassNames';
import mainClassNames from '../../classNames/mainClassNames';

class ToggleTheme {
  static themeToggle(): void {
    const calculatorBody: HTMLElement = document.querySelector(`.${calculator.root}`);
    const historyButton: HTMLElement = document.querySelector(`.${historyField.historyIcon}`);
    const enginnerButton: HTMLElement = document.querySelector(
      `.${optionsClassNames.containerForEngineer}`,
    );
    const inputContent: HTMLElement = document.querySelector(`.${inputClassNames.inputField}`);
    const outputContent: HTMLElement = document.querySelector(`.${outputClassNames.resultField}`);
    const outputEqual: HTMLElement = document.querySelector(`.${outputClassNames.equalIcon}`);
    const controlButtons: HTMLElement = document.querySelector(`.${calculatorControlButtons.root}`);
    const equalButton: HTMLElement = document.querySelector(`.${extraClassNames.equalButton}`);
    const mainButton = document.querySelectorAll(`.${mainClassNames.mainButtons}`);
    const operationElements = document.querySelectorAll(`.${mainClassNames.operatorsBackground}`);
    const operationButtons = document.querySelectorAll(`.${mainClassNames.operation}`);
    const numberButtons = document.querySelectorAll(`.${mainClassNames.number}`);
    calculatorBody.classList.toggle(`${darkThemeClassNames.calculatorDark}`);
    if (enginnerButton) {
      enginnerButton.classList.toggle(`${darkThemeClassNames.engineerOptionsDark}`);
    }
    historyButton.classList.toggle(`${darkThemeClassNames.historyDark}`);
    inputContent.classList.toggle(`${darkThemeClassNames.inputFieldDark}`);
    outputContent.classList.toggle(`${darkThemeClassNames.resultOutputDark}`);
    outputEqual.classList.toggle(`${darkThemeClassNames.resultOutputDark}`);
    controlButtons.classList.toggle(`${darkThemeClassNames.controlButtonsDark}`);
    Array.from(mainButton).forEach(button =>
      button.classList.toggle(`${darkThemeClassNames.mainButtonDark}`),
    );
    Array.from(operationElements).forEach(button =>
      button.classList.toggle(`${darkThemeClassNames.operationsBackgroundDark}`),
    );
    Array.from(operationButtons).forEach(button =>
      button.classList.toggle(`${darkThemeClassNames.operationButtonsDark}`),
    );
    if (equalButton) {
      equalButton.classList.toggle(`${darkThemeClassNames.equalDark}`);
    }
    Array.from(numberButtons).forEach(button =>
      button.classList.toggle(`${darkThemeClassNames.numbersDark}`),
    );
  }
}

export default ToggleTheme;
