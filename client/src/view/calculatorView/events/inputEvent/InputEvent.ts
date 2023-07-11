import { inputClassNames } from '../../classNames/classNamesOfElements';
import mainClassNames from '../../classNames/mainClassNames';
import { eventsType } from '../../config/config';
import Config from '../../../config/calculatorConfig';

class InputEvents {
  static setEvents(container: HTMLElement): HTMLElement {
    Array.from(container.children).forEach(element => {
      if (Array.from(element.classList).includes(mainClassNames.customEvent)) {
        return;
      }
      element.addEventListener(eventsType.click, () =>
        InputEvents.inputContent(element.textContent),
      );
    });
    return container;
  }

  static inputContent(content: string): void {
    const inputField: HTMLInputElement = document.querySelector(`.${inputClassNames.inputField}`);
    const cursorPosition: number = inputField.selectionStart;
    const currentValue: string = inputField.value;
    const newValue =
      currentValue.slice(0, cursorPosition) + content + currentValue.slice(cursorPosition);
    inputField.value = newValue;
    inputField.focus();
    inputField.setSelectionRange(cursorPosition + content.length, cursorPosition + content.length);
  }

  static updateExpressionByKey(event: KeyboardEvent) {
    const keychar: string = event.key;
    if (!Config.getConfig().allowedButtons.includes(keychar)) {
      event.preventDefault();
    }
  }
}

export default InputEvents;
