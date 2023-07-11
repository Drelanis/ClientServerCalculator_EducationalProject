import IModel from '../../../../model/IModel';
import { calculator, errorClassNames } from '../../classNames/classNamesOfElements';
import { eventsType, tags } from '../../config/config';
import ErrorEvents from '../../events/errorEvent/ErrorEvent';
import iconsClassNames from '../../public/icons';

export type errorObject = { isValid: boolean; message: string };

class ErrorField {
  static renderErrorField(context: IModel): void {
    const previusElement = document.querySelector(`.${errorClassNames.root}`);

    const errorMessageElement = document.createElement(tags.div);
    errorMessageElement.classList.add(errorClassNames.container);

    const errorMessageIconContainer = document.createElement(tags.div);
    errorMessageIconContainer.classList.add(errorClassNames.containerForIcon);

    const errorMessageIcon = document.createElement(tags.i);
    errorMessageIcon.classList.add(iconsClassNames.mainClassName, iconsClassNames.errorIcon);

    const errorMessageText = document.createElement(tags.span);
    errorMessageText.classList.add(errorClassNames.text);
    errorMessageText.textContent = context.getErrorMessage();

    errorMessageIconContainer.append(errorMessageIcon);
    errorMessageElement.append(errorMessageIconContainer);
    errorMessageElement.append(errorMessageText);

    previusElement.after(errorMessageElement);

    const calculatorBody: HTMLElement = document.querySelector(`.${calculator.root}`);

    calculatorBody.addEventListener(eventsType.mouseDown, () => ErrorEvents.errorClearMessage());
    calculatorBody.addEventListener(eventsType.keyDown, () => ErrorEvents.errorClearMessage());
  }
}
export default ErrorField;
