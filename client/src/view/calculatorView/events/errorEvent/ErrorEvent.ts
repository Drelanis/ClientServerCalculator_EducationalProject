import { errorClassNames, outputClassNames } from '../../classNames/classNamesOfElements';
import { eventsType } from '../../config/config';

class ErrorEvents {
  static errorClearMessage(): void {
    const outputField = document.querySelector(`.${outputClassNames.resultField}`);
    const errorElement = document.querySelector(`.${errorClassNames.container}`);
    if (!errorElement) {
      return;
    }
    errorElement.remove();
    outputField.textContent = '';
    document.removeEventListener(eventsType.mouseDown, this.errorClearMessage);
    document.removeEventListener(eventsType.click, this.errorClearMessage);
  }
}

export default ErrorEvents;
