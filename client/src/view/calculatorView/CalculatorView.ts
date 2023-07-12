import IModel from '../../model/IModel';
import { outputClassNames } from './classNames/classNamesOfElements';
import AbstractBaseElement from './elements/abstractBaseElement/AbstractBaseElement';
import CalculatorBody from './elements/calculatorBody/CalculatorBody';

class CalculatorView extends AbstractBaseElement {
  constructor(public model: IModel) {
    super();
    this.model.addSubscribe('newMathResult', this.renderResult);
    this.render();
  }

  render(): void {
    new CalculatorBody(this.model);
  }

  renderResult(context: IModel) {
    const outputField: HTMLElement = document.querySelector(`.${outputClassNames.resultField}`);
    outputField.textContent = `${context.getResult()}`;
  }
}

export default CalculatorView;
