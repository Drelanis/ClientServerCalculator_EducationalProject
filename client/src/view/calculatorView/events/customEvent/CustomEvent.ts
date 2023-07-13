import IModel from '../../../../model/IModel';
import {
  inputClassNames,
  outputClassNames,
  spinnerClassNames,
} from '../../classNames/classNamesOfElements';
import customEventsClassNames from '../../classNames/customEventsClassNames';
import { eventsType } from '../../config/config';
import Spinner from '../../elements/spinner/Spinner';

class CustomEvents {
  constructor(public model: IModel) {
    this.calculateExression();
  }

  static allClean(): void {
    document.querySelector<HTMLInputElement>(`.${inputClassNames.inputField}`).value = '';
    document.querySelector<HTMLElement>(`.${outputClassNames.resultField}`).textContent = '';
  }

  calculateExression(): void {
    const equal: HTMLElement = document.querySelector(`.${customEventsClassNames.equal}`);
    equal.addEventListener(eventsType.click, () => this.calculateExpressionEvent());
  }

  private calculateExpressionEvent() {
    const input: HTMLInputElement = document.querySelector(`.${inputClassNames.inputField}`);
    const outputField = document.querySelector(`.${outputClassNames.resultField}`);

    if (this.model.getExpression() === input.value) {
      if (this.model.getErrorMessage()) {
        this.model.setError(this.model.getErrorMessage());
        this.model.setResult(0);
      }
      return;
    }

    this.model.clearErrorField();
    if (!input.value) return;
    outputField.textContent = '';
    setTimeout(() => {
      if (outputField.textContent) return;
      document.querySelector(`.${outputClassNames.resultField}`).textContent = '';
      Spinner.render(`${outputClassNames.resultField}`);
      const spinner: HTMLElement = document.querySelector(`.${spinnerClassNames.root}`);
      spinner.style.height = '20px';
      spinner.style.width = '20px';
      spinner.style.borderWidth = '5px';
    }, 200);

    this.model.setExpression(input.value);
  }
}

export default CustomEvents;
