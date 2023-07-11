import { inputClassNames } from '../../classNames/classNamesOfElements';
import { atributesNames, atributesValues, eventsType, tags } from '../../config/config';
import InputEvents from '../../events/inputEvent/InputEvent';
import AbstractBaseElement from '../abstractBaseElement/AbstractBaseElement';

class Input extends AbstractBaseElement {
  constructor() {
    super();
    this.render();
  }

  public render(): void {
    const rootElement = document.querySelector(`.${inputClassNames.root}`);
    const inputField = this.createInputField();
    rootElement.append(inputField);
  }

  private createInputField(): HTMLElement {
    const input: HTMLElement = this.createElement(
      tags.textarea,
      inputClassNames.inputField,
      atributesNames.type,
      atributesValues.text,
    );
    input.setAttribute(atributesNames.placeholder, atributesValues.inputPlaceholder);
    input.addEventListener(eventsType.keyPress, event => InputEvents.updateExpressionByKey(event));
    return input;
  }
}

export default Input;
