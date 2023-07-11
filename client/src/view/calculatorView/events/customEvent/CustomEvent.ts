import IModel from '../../../../model/IModel';
import { inputClassNames, outputClassNames } from '../../classNames/classNamesOfElements';
import customEventsClassNames from '../../classNames/customEventsClassNames';
import { eventsType } from '../../config/config';

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
    const input: HTMLInputElement = document.querySelector(`.${inputClassNames.inputField}`);
    equal.addEventListener(eventsType.click, () => this.model.setExpression(input.value));
  }
}

export default CustomEvents;
