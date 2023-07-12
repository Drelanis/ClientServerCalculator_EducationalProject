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

    if (this.model.getExpression() === input.value) return;
    if (input.value) {
      document.querySelector(`.${outputClassNames.resultField}`).textContent = '';
      Spinner.render(`${outputClassNames.resultField}`);
      const spinner: HTMLElement = document.querySelector(`.${spinnerClassNames.root}`);
      spinner.style.height = '20px';
      spinner.style.width = '20px';
      spinner.style.borderWidth = '5px';
    }
    this.model.setExpression(input.value);
  }
}

export default CustomEvents;
