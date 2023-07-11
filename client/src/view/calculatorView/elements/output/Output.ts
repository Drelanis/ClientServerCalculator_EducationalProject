import { outputClassNames } from '../../classNames/classNamesOfElements';
import { tags } from '../../config/config';
import AbstractBaseElement from '../abstractBaseElement/AbstractBaseElement';
import Config from '../../../config/calculatorConfig';
import { IOperations } from '../../../../interfaces/calculatorInterfaces';

class Output extends AbstractBaseElement {
  constructor() {
    super();
    this.render();
  }

  public render(): void {
    const root = document.querySelector(`.${outputClassNames.root}`);
    root.append(this.createOutputIcon(), this.createOuputResult());
  }

  private createOutputIcon(): HTMLElement {
    const element = this.createElement(tags.span, outputClassNames.equalIcon);
    const rightOperations = Config.getConfig().rightMainOperations as IOperations;
    element.textContent = rightOperations.equal.content;
    return element;
  }

  private createOuputResult(): HTMLElement {
    return this.createElement(tags.span, outputClassNames.resultField);
  }
}

export default Output;
